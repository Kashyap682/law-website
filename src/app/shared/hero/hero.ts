import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  constructor(private router: Router) { }

  onPrimaryCta() {
    this.router.navigate(['/contact']);
  }

  onEmailSubmit(event: Event, email?: string) {
    event.preventDefault();
    const trimmed = (email || '').trim();
    if (!trimmed) {
      console.log('No email entered.');
      return;
    }
    console.log('Subscribe email:', trimmed);
    // TODO: send to backend or newsletter API
  }
}
