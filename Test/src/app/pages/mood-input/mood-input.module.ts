import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodInputPageRoutingModule } from './mood-input-routing.module';

import { MoodInputPage } from './mood-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodInputPageRoutingModule
  ],
  declarations: [MoodInputPage]
})
export class MoodInputPageModule {}
