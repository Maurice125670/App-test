import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-recommendation',
  templateUrl: './fiche-recommendation.component.html',
  styleUrls: ['./fiche-recommendation.component.scss'],
})
export class FicheRecommendationComponent {
  @Input() titre: string = ''; // Titre de la fiche
  @Input() recommandations: { text: string; image?: string; video?: string; timer?: number }[] = []; // Liste des actions

  currentStepIndex: number = 0; // Index de l'action en cours

  // Passe à l'étape suivante
  nextStep() {
    if (this.currentStepIndex < this.recommandations.length - 1) {
      this.currentStepIndex++;
    }
  }

  // Vérifie si l'étape est terminée
  get isCompleted(): boolean {
    return this.currentStepIndex >= this.recommandations.length;
  }
}
