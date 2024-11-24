// src/app/pages/mood-input/mood-input.page.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mood-input',
  templateUrl: './mood-input.page.html',
  styleUrls: ['./mood-input.page.scss'],
})
export class MoodInputPage implements OnInit, OnDestroy {
  userId: string | null = null;
  userName: string = '';
  userEmail: string = '';
  userDepartment: string = '';
  private userSubscription: Subscription | undefined;

  emotionLevel: number = 0;
  feelingsOptions: string[] = [];
  selectedFeelings: { [key: string]: boolean } = {};

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private router: Router
  ) {
    this.feelingsOptions = ['Neutre', 'Calme', 'Fatigué(e)', 'Indifférent(e)'];
  }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser().subscribe({
      next: async (currentUser) => {
        if (!currentUser) {
          this.router.navigate(['/login']);
          return;
        }

        this.userId = currentUser.uid;
        this.userName = currentUser.firstName;
        this.userEmail = currentUser.email;
        this.userDepartment = currentUser.department;

        try {
          const hasEntry = await this.firebaseService.hasMoodEntryForToday(this.userId);
          if (hasEntry) {
            alert('Vous avez déjà saisi votre humeur aujourd\'hui.');
            this.router.navigate(['/thank-you']);
            return;
          }
        } catch (error) {
          console.error('Error checking mood entry:', error);
          alert('Une erreur est survenue lors de la vérification de vos données.');
        }
      },
      error: (error) => {
        console.error('Error loading user data:', error);
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  onEmotionLevelChange() {
    // Reset feelings when emotion level changes
    this.selectedFeelings = {};

    if (this.emotionLevel <= -2) {
      // Negative emotions
      this.feelingsOptions = [
        'Stressé(e)',
        'Épuisé(e)',
        'Frustré(e)',
        'Triste',
        'Anxieux(se)',
        'Surmené(e)',
      ];
    } else if (this.emotionLevel >= 2) {
      // Positive emotions
      this.feelingsOptions = [
        'Heureux(se)',
        'Satisfait(e)',
        'Enthousiaste',
        'Fier(e)',
        'Motivé(e)',
      ];
    } else {
      // Neutral emotions
      this.feelingsOptions = ['Neutre', 'Calme', 'Fatigué(e)', 'Indifférent(e)'];
    }
  }

  async submitMood() {
    if (!this.userId) {
      console.error('No user ID found');
      alert('Une erreur est survenue. Veuillez vous reconnecter.');
      this.router.navigate(['/login']);
      return;
    }

    const feelings = Object.keys(this.selectedFeelings).filter(
      (feeling) => this.selectedFeelings[feeling]
    );

    try {
      // Save user data
      await this.firebaseService.saveUserData({
        userId: this.userId,
        firstName: this.userName,
        email: this.userEmail,
        department: this.userDepartment
      });

      // Save mood data
      await this.firebaseService.saveMoodData({
        userId: this.userId,
        emotion_level: this.emotionLevel,
        feelings: feelings,
        date: new Date().toISOString()
      });

      alert('Votre humeur a été enregistrée. Merci !');
      
      // Reset form
      this.emotionLevel = 0;
      this.feelingsOptions = [];
      this.selectedFeelings = {};

      // Navigate to home page instead of thank-you
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error submitting mood:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  }
}
