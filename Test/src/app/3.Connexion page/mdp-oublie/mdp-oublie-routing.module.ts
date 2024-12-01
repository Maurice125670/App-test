import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MdpOubliePage } from './mdp-oublie.page';

const routes: Routes = [
  {
    path: '',
    component: MdpOubliePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdpOubliePageRoutingModule {}
