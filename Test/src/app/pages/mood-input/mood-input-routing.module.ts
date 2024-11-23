import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodInputPage } from './mood-input.page';

const routes: Routes = [
  {
    path: '',
    component: MoodInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodInputPageRoutingModule {}
