import { Injectable, Inject } from '@angular/core';
import { Auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, browserLocalPersistence, setPersistence } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { UserProfile, Department } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = new BehaviorSubject<UserProfile | null | undefined>(undefined);
  
  static readonly departments: Department[] = ['IT', 'Management', 'Customer Support', 'Sales'];
  
  constructor(
    @Inject('FIREBASE_AUTH') private auth: Auth,
    private firebaseService: FirebaseService
  ) {
    // Set persistence to LOCAL
    setPersistence(this.auth, browserLocalPersistence).then(() => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.loadUserProfile(user.uid);
        } else {
          this.currentUser.next(null);
        }
      });
    });
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  private async loadUserProfile(uid: string) {
    try {
      const profile = await this.firebaseService.getUserProfile(uid);
      this.currentUser.next({ ...profile, uid });
    } catch (error) {
      console.error('Error loading user profile:', error);
      this.currentUser.next(null);
    }
  }

  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    department: Department;
  }): Promise<UserProfile> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );

      const userProfile: UserProfile = {
        uid: userCredential.user.uid,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        department: data.department,
        role: 'user'
      };

      await this.firebaseService.saveUserProfile(userProfile);
      
      this.currentUser.next(userProfile);
      return userProfile;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      await this.loadUserProfile(userCredential.user.uid);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      this.currentUser.next(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
}
