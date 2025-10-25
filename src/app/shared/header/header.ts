import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {
  mobileMenuOpen = false;
  menuMaxHeight = '0px';

  navLinks = [
    { label: 'Home', route: '/home' },
    // { label: 'Practice Areas', route: '/practice-areas' },
    { label: 'Blogs', route: '/blogs' },
    { label: 'About', route: '/about' },
    // { label: 'Contact', route: '/contact' }
  ];

  @ViewChild('mobileMenu', { static: true }) mobileMenuEl!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // Ensure menu starts closed
    this.menuMaxHeight = '0px';
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;

    // Allow the DOM to update, then read scrollHeight and set max-height for transition
    // setTimeout is sufficient and reliable here.
    setTimeout(() => {
      const el = this.mobileMenuEl?.nativeElement;
      if (!el) return;

      if (this.mobileMenuOpen) {
        // Measure content height and set as max-height so it animates open
        this.menuMaxHeight = el.scrollHeight + 'px';
      } else {
        // Collapse to zero for closing animation
        this.menuMaxHeight = '0px';
      }
    }, 0);
  }
}
