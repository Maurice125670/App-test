import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDeRecoPage } from './test-de-reco.page';

const routes: Routes = [
  {
    path: '',
    component: TestDeRecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDeRecoPageRoutingModule {}
