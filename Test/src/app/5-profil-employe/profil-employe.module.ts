import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfilEmployeComponent } from './profil-employe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilEmployeComponent
      }
    ])
  ],
  declarations: [ProfilEmployeComponent],
  exports: [ProfilEmployeComponent]
})
export class ProfilEmployeModule { }
