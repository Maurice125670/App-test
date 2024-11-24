import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase.config';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

@NgModule({
  declarations: [
    AppComponent, // Déclaration de l'AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Configuration Ionic
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseService,
    AuthService,
    { provide: 'FIREBASE_APP', useValue: app },
    { provide: 'FIREBASE_AUTH', useValue: auth },
    { provide: 'FIREBASE_DATABASE', useValue: database },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajout du schema pour les Web Components
})
export class AppModule {}
