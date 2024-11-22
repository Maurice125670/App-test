import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private selectedEmotion: string | null = null;

  // Stocke la réponse de la question 1
  setSelectedEmotion(emotion: string) {
    this.selectedEmotion = emotion;
  }

  // Récupère la réponse
  getSelectedEmotion(): string | null {
    return this.selectedEmotion;
  }
}
