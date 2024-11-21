import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePersoPageRoutingModule } from './message-perso-routing.module';

import { MessagePersoPage } from './message-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePersoPageRoutingModule
  ],
  declarations: [MessagePersoPage]
})
export class MessagePersoPageModule {}
