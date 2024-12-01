import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup-step-one',
  templateUrl: './signup-step-one.page.html',
  styleUrls: ['./signup-step-one.page.scss'],
})
export class SignupStepOnePage {
  status: string | null = null;
  currentImage: string = 'assets/employeousuperviseur.png';
  isImageChanging: boolean = false;

  constructor(private navCtrl: NavController) {}

  // Cette fonction sera appelée lorsque l'utilisateur sélectionne un statut
  selectStatus(selectedStatus: string) {
    this.status = selectedStatus;
    // Déclencher l'animation
    this.isImageChanging = true;
    
    // Mettre à jour l'image en fonction du statut
    if (selectedStatus === 'employe') {
      this.currentImage = 'assets/employe.png';
    } else if (selectedStatus === 'superviseur') {
      this.currentImage = 'assets/superviseur.png';
    }
    
    // Réinitialiser l'état de l'animation après un court délai
    setTimeout(() => {
      this.isImageChanging = false;
    }, 300);
  }

  // Cette fonction sera appelée lorsqu'on clique sur "Continuer"
  continue() {
    if (this.status === 'employe') {
      this.navCtrl.navigateForward(`/signup-step-two/employe`);
    } else if (this.status === 'superviseur') {
      this.navCtrl.navigateForward(`/signup-step-two/superviseur`);
    } else {
      alert('Veuillez sélectionner un statut');
    }
  }
}
