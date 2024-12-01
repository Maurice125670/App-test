import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDArriveePage } from './page-d-arrivee.page';

const routes: Routes = [
  {
    path: '',
    component: PageDArriveePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDArriveePageRoutingModule {}
