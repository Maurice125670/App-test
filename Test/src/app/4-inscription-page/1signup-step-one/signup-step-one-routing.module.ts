import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupStepOnePage } from './signup-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: SignupStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupStepOnePageRoutingModule {}
