import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-home-page-button',
  templateUrl: './to-home-page-button.component.html',
  styleUrls: ['./to-home-page-button.component.css'],
})
export class ToHomePageButtonComponent {
  constructor(private router: Router) {}

  redirectToHomePage(): void {
    this.router.navigate(['/']);
  }
}
