import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheRecommendationComponent } from './Composant/fiche-recommendation/fiche-recommendation.component'; // Import du composant
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent, // Déclaration de l'AppComponent (composant principal)
    FicheRecommendationComponent, // Déclaration de ton composant FicheRecommendationComponent
  ],
  imports: [
    BrowserModule, // Module pour les fonctionnalités web de base
    IonicModule.forRoot(), // Configuration de l'application Ionic
    AppRoutingModule, // Configuration des routes
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // Gestion de la stratégie de réutilisation des routes
  ],
  bootstrap: [AppComponent], // Composant principal au démarrage
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajoute ceci
})
export class AppModule {}
