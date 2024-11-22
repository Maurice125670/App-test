import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question3Page } from './question3.page';

const routes: Routes = [
  {
    path: '',
    component: Question3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question3PageRoutingModule {}
