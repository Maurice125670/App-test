import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupStepFourPage } from './signup-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: SignupStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupStepFourPageRoutingModule {}
