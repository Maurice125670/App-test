import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question1PageRoutingModule } from './question1-routing.module';

import { Question1Page } from './question1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question1PageRoutingModule
  ],
  declarations: [Question1Page]
})
export class Question1PageModule {}
