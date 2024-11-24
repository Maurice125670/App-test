import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  userId: string | null = null;
  firstName: string = '';
  moodData: any[] = [];
  moodStreak: number = 0;
  canAddMood: boolean = false;
  private userSubscription: Subscription | undefined;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser().subscribe({
      next: async (currentUser) => {
        console.log('Current User:', currentUser);
        if (currentUser) {
          this.userId = currentUser.uid;
          this.firstName = currentUser.firstName;
          console.log('Set userName to:', this.firstName);
          
          // Get mood data and initialize charts
          const data = await this.firebaseService.getMoodData(this.userId);
          this.moodData = data;
          this.moodStreak = this.calculateMoodStreak(this.moodData);
          
          // Initialize both charts
          this.initializeChart();
          await this.initializeFeelingsChart();
          
          // Check if user can add mood today
          const hasEntry = await this.firebaseService.hasMoodEntryForToday(this.userId);
          this.canAddMood = !hasEntry;
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Error loading user data:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  calculateMoodStreak(moodData: any[]): number {
    let streak = 0;
    const today = new Date();
    let currentDate = new Date(today);

    for (let i = moodData.length - 1; i >= 0; i--) {
      const moodDate = new Date(moodData[i].date);
      if (moodDate.toDateString() === currentDate.toDateString()) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  }

  initializeChart() {
    const ctx = document.getElementById('moodChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.moodData.map(entry => entry.date),
        datasets: [{
          label: 'Niveau d\'humeur',
          data: this.moodData.map(entry => entry.emotion_level),
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Niveau d\'humeur'
            }
          }
        }
      }
    });
  }

  async initializeFeelingsChart() {
    if (!this.userId) return;
    
    const feelingsData = await this.firebaseService.getFeelingsData(this.userId);
    
    const ctx = document.getElementById('feelingsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(feelingsData),
        datasets: [{
          data: Object.values(feelingsData),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#FF6384',
            '#36A2EB'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20
            }
          }
        }
      }
    });
  }

  navigateToMoodInput() {
    this.router.navigate(['/mood-input']);
  }
}