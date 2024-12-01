import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupStepTwoPage } from './signup-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: SignupStepTwoPage
  },
  {
    path: ':userType',
    component: SignupStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupStepTwoPageRoutingModule {}
