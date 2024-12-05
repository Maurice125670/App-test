import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mdp-oubli',
  templateUrl: './mdp-oublie.page.html',
  styleUrls: ['./mdp-oublie.page.scss'],
})
export class MdpOubliePage {
  email: string = ''; // To store user input for the email

  constructor(private navCtrl: NavController) {}

  // Navigate back to the previous page
  goBack() {
    this.navCtrl.back();
  }

  // Handle password reset logic
  onReset() {
    if (this.email.trim() === '') {
      alert('Veuillez entrer une adresse email valide.');
    } else {
      console.log('Réinitialisation demandée pour:', this.email);
      // You can replace this with an actual API call to handle password reset
      alert('Un email de réinitialisation a été envoyé.');
    }
  }
}
