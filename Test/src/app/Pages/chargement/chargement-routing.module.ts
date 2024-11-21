import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargementPage } from './chargement.page';

const routes: Routes = [
  {
    path: '',
    component: ChargementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargementPageRoutingModule {}
