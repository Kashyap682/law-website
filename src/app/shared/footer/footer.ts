import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  imports: [CommonModule, RouterLink]
})
export class Footer implements OnChanges {
  @Input() address = '303, Classica-1, Left off Jaddu’s Food Field, Kalawad Road, Rajkot – 360005, Gujarat, IND';
  @Input() phone = '+91 99042 76969';
  @Input() email = 'adv.parthivjoshi@gmail.com';
  @Input() year = new Date().getFullYear();
  @Input() practice = 'Your Practice Name';

  private readonly embedSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d923.0330164316255!2d70.7589897!3d22.2729866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb269465bfe9%3A0x15fa59b40481f919!2sClassica%201!5e0!3m2!1sen!2sin!4v1761412686452!5m2!1sen!2sin';

  mapSafeUrl: SafeResourceUrl | null = null;
  googleMapsLink = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.buildMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildMap();
  }

  private buildMap() {
    const encodedAddress = encodeURIComponent(this.address || 'Classica 1, Rajkot, India');
    this.googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    this.mapSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedSrc);
  }
}
