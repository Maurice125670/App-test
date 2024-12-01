import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-step-two',
  templateUrl: './signup-step-two.page.html',
  styleUrls: ['./signup-step-two.page.scss'],
})
export class SignupStepTwoPage implements OnInit {
  lastName: string = '';
  firstName: string = '';
  gender: string = '';
  userType: string = '';
  
  // Date de naissance
  birthDay: string = '';
  birthMonth: string = '';
  birthYear: string = '';
  
  // Listes pour les sélecteurs
  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months = [
    { value: '01', text: 'Janvier' },
    { value: '02', text: 'Février' },
    { value: '03', text: 'Mars' },
    { value: '04', text: 'Avril' },
    { value: '05', text: 'Mai' },
    { value: '06', text: 'Juin' },
    { value: '07', text: 'Juillet' },
    { value: '08', text: 'Août' },
    { value: '09', text: 'Septembre' },
    { value: '10', text: 'Octobre' },
    { value: '11', text: 'Novembre' },
    { value: '12', text: 'Décembre' }
  ];
  years: number[] = Array.from({length: 100}, (_, i) => new Date().getFullYear() - i);

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Récupérer le type d'utilisateur depuis l'URL
    this.route.params.subscribe(params => {
      this.userType = params['userType'];
      if (!this.userType) {
        // Si pas de type d'utilisateur, rediriger vers step-one
        this.router.navigate(['/signup-step-one']);
      }
    });
  }

  selectGender(selectedGender: string) {
    this.gender = selectedGender;
  }

  // Vérification de la validité du formulaire
  isFormValid(): boolean {
    return (
      this.lastName?.trim() !== '' &&
      this.firstName?.trim() !== '' &&
      this.birthDay !== '' &&
      this.birthMonth !== '' &&
      this.birthYear !== '' &&
      this.gender !== ''
    );
  }

  // Obtenir la date complète au format ISO
  getBirthDate(): string {
    if (this.birthDay && this.birthMonth && this.birthYear) {
      return `${this.birthYear}-${this.birthMonth}-${this.birthDay}`;
    }
    return '';
  }

  async continue() {
    if (this.isFormValid()) {
      const userData = {
        lastName: this.lastName,
        firstName: this.firstName,
        birthDate: this.getBirthDate(),
        gender: this.gender,
        userType: this.userType
      };
      console.log('Informations utilisateur:', userData);
      
      try {
        await this.navCtrl.navigateForward(['/signup-step-three', this.userType], {
          animated: true,
          animationDirection: 'forward'
        });
      } catch (error) {
        console.error('Erreur de navigation:', error);
        // Fallback sur le Router si la navigation avec NavController échoue
        await this.router.navigate(['/signup-step-three', this.userType]);
      }
    } else {
      alert('Merci de remplir tous les champs');
    }
  }
}
