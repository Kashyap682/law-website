import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Disclaimer, SESSION_KEY } from '../app/pages/disclaimer/disclaimer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Disclaimer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('law-website');
  agreed = signal<boolean>(this.readConsent());

  private readConsent(): boolean {
    try {
      return sessionStorage.getItem(SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  }

  onAgreed() {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch { }
    this.agreed.set(true);
  }
}
