// src/app/pages/mood-input/mood-input.page.ts

import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mood-input',
  templateUrl: './mood-input.page.html',
  styleUrls: ['./mood-input.page.scss'],
})
export class MoodInputPage {
  // Hardcoded user data
  userId = '123sa';
  userName = 'Salma Renaud';
  userEmail = 'salma.salma@example.com';
  userDepartment = 'Informatique';

  emotionLevel: number = 0;
  feelingsOptions: string[] = [];
  selectedFeelings: { [key: string]: boolean } = {};

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

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
    const feelings = Object.keys(this.selectedFeelings).filter(
      (feeling) => this.selectedFeelings[feeling]
    );

    try {
      // Save user data
      await this.firebaseService.saveUserData({
        userId: this.userId,
        name: this.userName,
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

      // Optionally navigate to a thank you page
      this.router.navigate(['/thank-you']);
    } catch (error) {
      console.error('Error submitting mood:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  }
}
