import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-recommendation', // Nom du composant pour le réutiliser dans ton HTML
  templateUrl: './fiche-recommendation.component.html', // Lien vers le fichier HTML
  styleUrls: ['./fiche-recommendation.component.scss'], // Lien vers le fichier CSS
})
export class FicheRecommendationComponent {
  // Entrées dynamiques pour personnaliser la fiche
  @Input() titre: string = ''; // Titre de la fiche
  @Input() description: string = ''; // Description de la fiche
  @Input() recommandations: string[] = []; // Liste des recommandations (actions à effectuer)

  // Index pour suivre quelle action est affichée actuellement
  currentActionIndex: number = 0; // Initialisé à 0, donc on commence par la première action

  // Méthode pour récupérer l'action actuelle en fonction de l'index
  get currentAction(): string {
    return this.recommandations[this.currentActionIndex]; // Retourne l'action en cours
  }

  // Méthode appelée lorsque l'utilisateur termine une action
  terminerAction() {
    if (this.currentActionIndex < this.recommandations.length - 1) {
      // Si on n'est pas à la dernière action, on passe à la suivante
      this.currentActionIndex++;
    } else {
      // Si toutes les actions sont terminées, on peut déclencher une autre logique
      console.log('Toutes les actions sont terminées pour cette fiche !');
    }
  }
}
