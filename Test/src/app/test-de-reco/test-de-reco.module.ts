import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TestDeRecoPageRoutingModule } from './test-de-reco-routing.module';
import { TestDeRecoPage } from './test-de-reco.page';
import { FicheRecommendationComponent } from '../Composant/fiche-recommendation/fiche-recommendation.component'; // Import du composant

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDeRecoPageRoutingModule,
  ],
  declarations: [
    TestDeRecoPage, // Page principale
    FicheRecommendationComponent, // Composant personnalisé
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Pour supporter les Web Components
})
export class TestDeRecoPageModule {}
