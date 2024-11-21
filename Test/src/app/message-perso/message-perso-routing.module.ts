import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagePersoPage } from './message-perso.page';

const routes: Routes = [
  {
    path: '',
    component: MessagePersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePersoPageRoutingModule {}
