import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // Profil utilisateur
  profileImage: string | null = null;
  userName: string | null = null;
  userEmail: string | null = null;

  // Préférences
  darkMode: boolean = false;
  notifications: boolean = true;
  language: string = 'fr';

  // Suivi d'humeur
  dailyReminder: boolean = false;
  reminderTime: string = '09:00';
  analysisPeriod: string = 'week';

  // Confidentialité
  appLock: boolean = false;
  autoBackup: boolean = true;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Charger les préférences sauvegardées
    this.loadUserPreferences();
  }

  async loadUserPreferences() {
    // Simuler le chargement des préférences
    // À remplacer par un vrai appel API
    setTimeout(() => {
      this.profileImage = 'assets/default-avatar.png';
      this.userName = 'John Doe';
      this.userEmail = 'john.doe@example.com';
    }, 1000);
  }

  async saveChanges() {
    // Simuler la sauvegarde
    // À remplacer par un vrai appel API
    const toast = await this.toastController.create({
      message: 'Préférences sauvegardées avec succès',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  async showHelp() {
    const toast = await this.toastController.create({
      message: 'Centre d\'aide en cours de développement',
      duration: 2000,
      position: 'bottom',
      color: 'medium'
    });
    toast.present();
  }

  async logout() {
    // Simuler la déconnexion
    // À remplacer par un vrai appel API
    this.router.navigate(['/login']);
  }

  async changePhoto() {
    // Simuler le changement de photo
    // À remplacer par un vrai appel API
    const toast = await this.toastController.create({
      message: 'Fonctionnalité en cours de développement',
      duration: 2000,
      position: 'bottom',
      color: 'medium'
    });
    toast.present();
  }

  // Gestionnaires d'événements pour les changements de paramètres
  onDarkModeChange() {
    document.body.classList.toggle('dark', this.darkMode);
  }

  onNotificationsChange() {
    // Implémenter la logique de gestion des notifications
  }

  onLanguageChange() {
    // Implémenter la logique de changement de langue
  }

  onReminderChange() {
    // Implémenter la logique de gestion des rappels
  }

  onAppLockChange() {
    // Implémenter la logique de verrouillage de l'application
  }

  onAutoBackupChange() {
    // Implémenter la logique de sauvegarde automatique
  }
}
