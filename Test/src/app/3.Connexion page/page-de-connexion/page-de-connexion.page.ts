import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Ajout de l'importation du Router

@Component({
  selector: 'app-page-de-connexion',
  templateUrl: './page-de-connexion.page.html',
  styleUrls: ['./page-de-connexion.page.scss'],
})
export class PageDeConnexionPage {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  showPassword: boolean = false; // Initialisation de la visibilité du mot de passe

  constructor(private router: Router) {} // Injection du service Router

  onForgotPassword() {
    this.router.navigate(['/mdp-oublie']); // Vérifie que '/mdp-oublie' correspond exactement au chemin défini dans app-routing.module.ts
  }
  

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Alterne la visibilité du mot de passe
  }
}
