import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-message-perso',
  templateUrl: './message-perso.page.html',
  styleUrls: ['./message-perso.page.scss'],
})
export class MessagePersoPage implements OnInit, AfterViewInit {
  @ViewChild('welcomeMessage', { static: false }) welcomeMessage!: ElementRef;

  randomPhrase: string = ''; // Phrase sélectionnée aléatoirement

  // Liste de phrases d'accroche
  phrases: string[] = [
    "Prêt à décrypter ton humeur ?", // Phrase 1
    "Comment te sens-tu aujourd'hui ?", // Phrase 2
    "Explorons ton état d'esprit !", // Phrase 3
    "Dis-moi tout, on commence ?", // Phrase 4
    "Es-tu prêt à partager ton émotion ?", // Phrase 5
  ];

  constructor() {}

  ngOnInit() {
    // Sélectionne une phrase aléatoire à partir de la liste
    this.randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  ngAfterViewInit() {
    // Ajuste dynamiquement la taille du texte après l'affichage de la page
    this.resizeTextToFit();
  }

  resizeTextToFit() {
    const element = this.welcomeMessage.nativeElement;
    const parent = element.parentElement;

    let fontSize = parseInt(window.getComputedStyle(element).fontSize, 10);
    while (element.scrollWidth > parent.offsetWidth && fontSize > 10) {
      fontSize -= 1;
      element.style.fontSize = `${fontSize}px`;
    }
  }
}
