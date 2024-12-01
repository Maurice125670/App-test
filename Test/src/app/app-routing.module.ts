
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loading',
    loadChildren: () =>
      import('./1-loading-page/loading/loading.module').then(
        (m) => m.LoadingPageModule
      ),
  },
  {
    path: 'page-d-arrivee',
    loadChildren: () =>
      import('./2-arrivee-page/page-d-arrivee/page-d-arrivee.module').then(
        (m) => m.PageDArriveePageModule
      ),
  },
  {
    path: 'page-de-connexion',
    loadChildren: () =>
      import('./2-connexion-page/page-de-connexion/page-de-connexion.module').then(
        (m) => m.PageDeConnexionPageModule
      ),
  },
  {
    path: 'mdp-oublie',
    loadChildren: () =>
      import('./2-connexion-page/mdp-oublie/mdp-oublie.module').then(
        (m) => m.MdpOubliePageModule
      ),
  },
  {
    path: 'verification-email',
    loadChildren: () =>
      import('./2-connexion-page/verification-email/verification-email.module').then(
        (m) => m.VerificationEmailPageModule
      ),
  },
  {
    path: 'signup-step-one',
    loadChildren: () =>
      import('./3-inscription-page/signup-step-one/signup-step-one.module').then(
        (m) => m.SignupStepOnePageModule
      ),
  },
  {
    path: 'profil-employe',
    loadChildren: () =>
      import('./5-profil-employe/profil-employe.module').then(
        (m) => m.ProfilEmployeModule
      ),
  },
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
