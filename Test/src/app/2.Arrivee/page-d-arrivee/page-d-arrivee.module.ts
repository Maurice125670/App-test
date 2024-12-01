import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDArriveePageRoutingModule } from './page-d-arrivee-routing.module';

import { PageDArriveePage } from './page-d-arrivee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDArriveePageRoutingModule
  ],
  declarations: [PageDArriveePage]
})
export class PageDArriveePageModule {}
