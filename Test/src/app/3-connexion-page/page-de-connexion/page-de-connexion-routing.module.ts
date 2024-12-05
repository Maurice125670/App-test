import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDeConnexionPage } from './page-de-connexion.page';

const routes: Routes = [
  {
    path: '',
    component: PageDeConnexionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDeConnexionPageRoutingModule {}
