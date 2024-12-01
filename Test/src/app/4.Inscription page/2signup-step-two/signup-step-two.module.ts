import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupStepTwoPageRoutingModule } from './signup-step-two-routing.module';

import { SignupStepTwoPage } from './signup-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupStepTwoPageRoutingModule
  ],
  declarations: [SignupStepTwoPage]
})
export class SignupStepTwoPageModule {}
