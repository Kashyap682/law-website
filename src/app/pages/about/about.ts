import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  year = new Date().getFullYear();

  // replace these with your real values or fetch them from a CMS
  name = 'Parthiv Joshi, Advocate';
  practice = 'Practice Name';
  email = 'adv.parthivjoshi@gmail.com';
  phone = '+91 99042 76969';
  photo = 'pt.jpg'; // update path in assets
  cv = 'YourName_CV.pdf'; // update path in assets

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // set title + description
    this.title.setTitle('About — Your Name, Esq. | Practice Name');
    this.meta.updateTag({
      name: 'description',
      content: 'Your Name is a commercial litigator and corporate counsel advising businesses...'
    });

    // add JSON-LD
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Your Name, Esq.',
      jobTitle: 'Principal Attorney',
      worksFor: {
        '@type': 'Organization',
        name: 'Practice Name'
      },
      description:
        'Commercial litigator and corporate counsel advising businesses on disputes, transactions and regulatory matters.'
    });
    this.renderer.appendChild(document.head, script);
  }
}
