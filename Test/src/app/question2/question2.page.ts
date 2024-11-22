import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {
  baseEmotions: string[] = ['Surpris', 'Colérique', 'Triste', 'Heureux', 'Dégoûté', 'Peureux'];
  emotions: string[] = [];
  questionText: string = "Qu'est-ce qui a principalement influencé votre humeur cette semaine ?";
  selectedEmotion: string | null = null;

  constructor(private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    // Récupère l'émotion sélectionnée dans la question 1
    const previousEmotion = this.questionnaireService.getSelectedEmotion();

    // Ajuste les émotions en fonction de la réponse précédente
    if (previousEmotion) {
      this.emotions = this.baseEmotions.filter((emotion) => emotion !== previousEmotion);
    } else {
      this.emotions = this.baseEmotions;
    }
  }

  selectEmotion(emotion: string) {
    this.selectedEmotion = emotion;
  }

  goToNextQuestion() {
    console.log('Emotion sélectionnée :', this.selectedEmotion);
    // Rediriger vers la question suivante ou autre action
  }
}
