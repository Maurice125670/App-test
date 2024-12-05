import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupStepOnePageRoutingModule } from './signup-step-one-routing.module';

import { SignupStepOnePage } from './signup-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupStepOnePageRoutingModule
  ],
  declarations: [SignupStepOnePage]
})
export class SignupStepOnePageModule {}
