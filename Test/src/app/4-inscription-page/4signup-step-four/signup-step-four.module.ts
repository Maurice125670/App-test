import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupStepFourPageRoutingModule } from './signup-step-four-routing.module';

import { SignupStepFourPage } from './signup-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupStepFourPageRoutingModule
  ],
  declarations: [SignupStepFourPage]
})
export class SignupStepFourPageModule {}
