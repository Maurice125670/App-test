
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { PageDArriveePage } from './page-d-arrivee.page';

const routes: Routes = [
  {
    path: '',
    component: PageDArriveePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageDArriveePage]
})
export class PageDArriveePageModule {}
