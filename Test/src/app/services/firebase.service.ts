import { Injectable, Inject } from '@angular/core';
import { Database, ref, set, get } from 'firebase/database';
import { UserProfile } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(@Inject('FIREBASE_DATABASE') private db: Database) {}

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
    firstName: string,
    email: string,
    department: string
  }) {
    const userRef = ref(this.db, `users/${data.userId}`);
    
    try {
      await set(userRef, {
        firstName: data.firstName,
        email: data.email,
        department: data.department
      });
      return true;
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  }

  async getMoodData(userId: string): Promise<any[]> {
    const moodRef = ref(this.db, `emotion_snapshots/${userId}`);
    try {
      const snapshot = await get(moodRef);
      if (snapshot.exists()) {
        const data = snapshot.val() as Record<string, any>;
        return Object.entries(data).map(([date, entry]) => ({ date, ...entry }));
      }
      return [];
    } catch (error) {
      console.error('Error fetching mood data:', error);
      throw error;
    }
  }

  async hasMoodEntryForToday(userId: string): Promise<boolean> {
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const moodRef = ref(this.db, `emotion_snapshots/${userId}/${today}`);
    
    try {
      const snapshot = await get(moodRef);
      return snapshot.exists();
    } catch (error) {
      console.error('Error checking mood entry:', error);
      throw error;
    }
  }

  async saveUserProfile(profile: UserProfile): Promise<void> {
    const userRef = ref(this.db, `users/${profile.uid}`);
    const { password, ...profileWithoutPassword } = profile as any;
    await set(userRef, profileWithoutPassword);
  }

  async getUserProfile(uid: string): Promise<UserProfile> {
    const userRef = ref(this.db, `users/${uid}`);
    const snapshot = await get(userRef);
    if (!snapshot.exists()) {
      throw new Error('User profile not found');
    }
    return { ...snapshot.val(), uid } as UserProfile;
  }

  async getFeelingsData(userId: string): Promise<{ [key: string]: number }> {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const moodData = await this.getMoodData(userId);
    const recentMoods = moodData.filter(mood => new Date(mood.date) >= sevenDaysAgo);
    
    // Count occurrences of each feeling
    const feelingsCount: { [key: string]: number } = {};
    recentMoods.forEach(mood => {
      mood.feelings.forEach((feeling: string) => {
        feelingsCount[feeling] = (feelingsCount[feeling] || 0) + 1;
      });
    });
    
    return feelingsCount;
  }
}
