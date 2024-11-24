import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { firebaseConfig } from '../../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private db = getDatabase(this.app);

  constructor() { }

  async saveMoodData(data: {
    userId: string,
    emotion_level: number,
    feelings: string[],
    date: string
  }) {
    const dateStr = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const moodRef = ref(this.db, `emotion_snapshots/${data.userId}/${dateStr}`);
    
    try {
      await set(moodRef, {
        emotion_level: data.emotion_level,
        feelings: data.feelings
      });
      return true;
    } catch (error) {
      console.error('Error saving mood data:', error);
      throw error;
    }
  }

  async saveUserData(data: {
    userId: string,
    name: string,
    email: string,
    department: string
  }) {
    const userRef = ref(this.db, `users/${data.userId}`);
    
    try {
      await set(userRef, {
        name: data.name,
        email: data.email,
        department: data.department
      });
      return true;
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  }
}
