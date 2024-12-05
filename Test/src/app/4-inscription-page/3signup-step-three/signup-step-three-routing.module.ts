import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupStepThreePage } from './signup-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: SignupStepThreePage
  },
  {
    path: ':userType',
    component: SignupStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupStepThreePageRoutingModule {}
