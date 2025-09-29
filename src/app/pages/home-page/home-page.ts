import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Hero } from '../../shared/hero/hero';
import { PracticeAreas } from '../practice-areas/practice-areas';
import { Blogs } from '../../shared/blogs/blogs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Hero, PracticeAreas, Blogs],
  templateUrl: './home-page.html',
  animations: [
    // fade + slight translate animation
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('420ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('320ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 0, transform: 'translateY(-8px)' }))
      ])
    ])
  ]
})
export class HomePage {
  currentStep = 1;
  totalSteps = 3;

  // touch tracking
  private touchStartY = 0;
  private lastTouchY = 0;
  private touchMoved = false;

  // prevent multiple transitions in quick succession
  private isTransitioning = false;
  private TRANSITION_LOCK_MS = 600; // tune for feel

  // wheel handler (desktop)
  onScroll(event: WheelEvent) {
    if (this.isTransitioning) return;
    this.lockTransition();

    if (event.deltaY > 0) {
      this.nextStep();
    } else if (event.deltaY < 0) {
      this.prevStep();
    }
  }

  // touchstart: record starting Y
  onTouchStart(event: TouchEvent) {
    if (!event.changedTouches || event.changedTouches.length === 0) return;
    this.touchStartY = event.changedTouches[0].clientY;
    this.lastTouchY = this.touchStartY;
    this.touchMoved = false;
  }

  // touchmove: track movement and prevent default (so browser doesn't scroll)
  onTouchMove(event: TouchEvent) {
    if (!event.changedTouches || event.changedTouches.length === 0) return;

    // prevent native scrolling / pull-to-refresh
    event.preventDefault();

    this.touchMoved = true;
    this.lastTouchY = event.changedTouches[0].clientY;
    // optional: you can provide an interactive drag UI here using the delta
  }

  // touchend: determine swipe direction and trigger step change
  onTouchEnd(event: TouchEvent) {
    if (!this.touchMoved) return; // tap, no swipe
    if (!event.changedTouches || event.changedTouches.length === 0) return;

    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = this.touchStartY - touchEndY;
    const threshold = 50; // minimum px to count as swipe (tweak as needed)

    if (this.isTransitioning) return;

    if (deltaY > threshold) {
      // swipe up -> next
      this.lockTransition();
      this.nextStep();
    } else if (deltaY < -threshold) {
      // swipe down -> previous
      this.lockTransition();
      this.prevStep();
    }
  }

  // helper to avoid rapid multiple triggers
  private lockTransition() {
    this.isTransitioning = true;
    setTimeout(() => (this.isTransitioning = false), this.TRANSITION_LOCK_MS);
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
