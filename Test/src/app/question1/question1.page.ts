import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page {
  emotions: string[] = ['Surpris', 'Colérique', 'Triste', 'Heureux', 'Dégoûté', 'Peureux'];
  selectedEmotion: string | null = null;

  constructor(private router: Router, private questionnaireService: QuestionnaireService) {}

  selectEmotion(emotion: string) {
    this.selectedEmotion = emotion;
  }

  goToNextQuestion() {
    if (this.selectedEmotion) {
      // Stocke l'émotion sélectionnée
      this.questionnaireService.setSelectedEmotion(this.selectedEmotion);

      // Redirige vers la question 2
      this.router.navigate(['/question2']);
    }
  }
}
