import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage {
  showNote: boolean = false; // Indique si la zone de texte est affichée
  noteText: string = ''; // Contient le texte de la note

  constructor() {}

  // Affiche ou masque la zone de texte
  toggleNote() {
    this.showNote = !this.showNote;
  }

  // Action pour quitter la page
  exit() {
    console.log('Note ajoutée :', this.noteText);
    alert('Merci pour votre retour !');
    // Logique pour rediriger ou quitter
  }
}
