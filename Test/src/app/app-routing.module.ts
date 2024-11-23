import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },  
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'message-perso',
    loadChildren: () => import('./message-perso/message-perso.module').then( m => m.MessagePersoPageModule)
  },
  {
    path: 'question1',
    loadChildren: () => import('./question1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'question3',
    loadChildren: () => import('./question3/question3.module').then( m => m.Question3PageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'mood-input',
    loadChildren: () => import('./pages/mood-input/mood-input.module').then( m => m.MoodInputPageModule)
  },  {
    path: 'test-de-reco',
    loadChildren: () => import('./test-de-reco/test-de-reco.module').then( m => m.TestDeRecoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
