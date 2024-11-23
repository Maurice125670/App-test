// src/app/pages/mood-input/mood-input.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-mood-input',
  templateUrl: './mood-input.page.html',
  styleUrls: ['./mood-input.page.scss'],
})
export class MoodInputPage {
  // Hardcoded user data
  userId = 'user1';
  userName = 'Antoine Renaud';
  userEmail = 'antoine.renaud@example.com';
  userDepartment = 'Informatique';

  emotionLevel: number = 0;
  feelingsOptions: string[] = [];
  selectedFeelings: { [key: string]: boolean } = {};

  constructor() {}

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

  submitMood() {
    // Get selected feelings
    const feelings = Object.keys(this.selectedFeelings).filter(
      (feeling) => this.selectedFeelings[feeling]
    );

    // Prepare data to display or process
    const data = {
      userId: this.userId,
      name: this.userName,
      email: this.userEmail,
      department: this.userDepartment,
      emotion_level: this.emotionLevel,
      feelings: feelings,
      date: new Date().toISOString(),
    };

    // For now, we will just log the data
    console.log('Mood Data:', data);

    alert('Votre humeur a été enregistrée. Merci !');

    // Optionally reset the form
    this.emotionLevel = 0;
    this.feelingsOptions = [];
    this.selectedFeelings = {};
  }
}
