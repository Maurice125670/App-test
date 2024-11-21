import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargementPageRoutingModule } from './chargement-routing.module';

import { ChargementPage } from './chargement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargementPageRoutingModule
  ],
  declarations: [ChargementPage]
})
export class ChargementPageModule {}
