import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup-step-three',
  templateUrl: './signup-step-three.page.html',
  styleUrls: ['./signup-step-three.page.scss'],
})
export class SignupStepThreePage implements OnInit {
  activities = [
    { name: 'Lire un livre', selected: false },
    { name: 'Regarder un film', selected: false },
    { name: 'Faire une promenade', selected: false },
    { name: 'Pratiquer la méditation', selected: false },
    { name: 'Faire du sport', selected: false },
    { name: 'Écouter de la musique', selected: false },
    { name: 'Faire du jardinage', selected: false },
    { name: 'Cuisine maison', selected: false },
  ];

  constructor(private navCtrl: NavController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

  continue() {
    const selectedActivities = this.activities.filter(activity => activity.selected);
    console.log('Activités sélectionnées :', selectedActivities);
    // Navigation vers la page suivante ou traitement supplémentaire
    this.navCtrl.navigateForward('/signup-step-four'); // Remplace par la prochaine page de l'inscription si besoin
  }
}
