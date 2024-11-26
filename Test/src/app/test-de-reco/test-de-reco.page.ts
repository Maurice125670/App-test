import { Component } from '@angular/core';

@Component({
  selector: 'app-test-de-reco',
  templateUrl: './test-de-reco.page.html',
  styleUrls: ['./test-de-reco.page.scss'],
})
export class TestDeRecoPage {
  titre = "tristesse"; 
  recommandations = [
    { text: 'Lire l\'introduction.', timer: 10 },
    { text: 'Regarder une vidéo.', video: 'assets/videos/exemple.mp4' },
    { text: 'Analyser une image.', image: 'assets/images/exemple.png' },
    { text: 'Compléter la dernière étape.' },
  ];
}
