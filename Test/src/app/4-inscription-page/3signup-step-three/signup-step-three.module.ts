import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupStepThreePageRoutingModule } from './signup-step-three-routing.module';

import { SignupStepThreePage } from './signup-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupStepThreePageRoutingModule
  ],
  declarations: [SignupStepThreePage]
})
export class SignupStepThreePageModule {}
