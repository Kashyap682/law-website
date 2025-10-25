import { Component, EventEmitter, HostListener, Output, OnInit, OnDestroy } from '@angular/core';

export const SESSION_KEY = 'disclaimerAgreed_v1';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  templateUrl: './disclaimer.html',
})
export class Disclaimer implements OnInit, OnDestroy {
  @Output() agreed = new EventEmitter<void>();

  // When mounted, lock scroll; when destroyed, restore it
  ngOnInit() {
    this.disableBodyScroll();
  }

  ngOnDestroy() {
    this.enableBodyScroll();
  }

  private disableBodyScroll() {
    // Store the current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  private enableBodyScroll() {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    // Restore the scroll position
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onAgree() {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch { }
    this.agreed.emit();
  }

  onDecline() {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch { }
    window.location.href = 'https://www.google.com';
  }
}
