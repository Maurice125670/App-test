import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup-step-four',
  templateUrl: './signup-step-four.page.html',
  styleUrls: ['./signup-step-four.page.scss'],
})
export class SignupStepFourPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;
  rememberMe: boolean = false;
  showPassword: boolean = false;

  // Variable pour gérer l'état de la popup
  isPopupOpen: boolean = false;

  constructor(private navCtrl: NavController) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isValidForm()) {
        console.log('Form Submitted');
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
        console.log(`Accept Terms: ${this.acceptTerms}`);
        console.log(`Remember Me: ${this.rememberMe}`);

        // Navigate to a new page after successful submission
        this.navCtrl.navigateForward('/page-de-connexion');
      } else {
        console.error('The form is not valid');
      }
    } else {
      console.error('The form is not valid');
    }
  }

  formValid(): boolean {
    return (
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.password === this.confirmPassword &&
      this.acceptTerms
    );
  }

  isValidForm(): boolean {
    let isValid = true;

    if (this.password !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      isValid = false;
    }

    if (!this.acceptTerms) {
      console.error('Vous devez accepter les termes et conditions');
      isValid = false;
    }

    return isValid;
  }

  // Ouvrir la popup
  openPopup(): void {
    this.isPopupOpen = true;
  }

  // Fermer la popup
  closePopup(): void {
    this.isPopupOpen = false;
  }
}
