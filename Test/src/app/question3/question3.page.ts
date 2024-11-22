import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page {
  stressLevel: number = 3; // Niveau de stress par défaut (milieu de l'échelle)

  constructor(private router: Router, private questionnaireService: QuestionnaireService) {}

  // Méthode appelée lors de la modification du slider
  updateStressLevel() {
    console.log('Niveau de stress sélectionné :', this.stressLevel);
  }

  // Méthode pour passer à la question suivante
  goToNextQuestion() {
    console.log('Niveau de stress final :', this.stressLevel);
    this.questionnaireService.setSelectedEmotion(this.stressLevel.toString()); // Enregistre la réponse
    this.router.navigate(['/question4']); // Redirige vers la prochaine question
  }
}
