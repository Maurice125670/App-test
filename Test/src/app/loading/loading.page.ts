import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirige vers les tabs après 3 secondes
    setTimeout(() => {
      this.router.navigate(['/message-perso']);
    },4500); // Temps en millisecondes
  }
}
