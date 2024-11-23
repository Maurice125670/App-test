import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TestDeRecoPageRoutingModule } from './test-de-reco-routing.module';
import { TestDeRecoPage } from './test-de-reco.page';
import { FicheRecommendationComponent } from '../components/fiche-recommendation/fiche-recommendation.component'; // Import du composant

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDeRecoPageRoutingModule,
  ],
  declarations: [
    TestDeRecoPage,
    FicheRecommendationComponent, // Ajoute le composant ici
  ],
})
export class TestDeRecoPageModule {}
