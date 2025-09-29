import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface ServiceCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string; // path under src/assets/ or an external URL
  bullets?: string[];
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  constructor(private router: Router) { }

  // sample data — replace image paths with your assets (put in src/assets/)
  services: ServiceCard[] = [
    {
      id: 'litigation',
      title: 'Commercial Litigation',
      subtitle: 'Disputes & remedies',
      description:
        'Representation in breach of contract, shareholder disputes, and commercial litigation matters.',
      image: 'commercial-litigation.png', // add to src/assets/
      bullets: ['Pre-trial strategy', 'Mediation & arbitration', 'Court representation'],
    },
    {
      id: 'corporate',
      title: 'Corporate Advisory',
      subtitle: 'Transactions & governance',
      description:
        'M&A support, corporate structuring, shareholder agreements and compliance advisory.',
      image: 'commercial-litigation.png',
      bullets: ['M&A due diligence', 'Shareholder agreements', 'Corporate governance'],
    },
    {
      id: 'regulatory',
      title: 'Regulatory & Compliance',
      subtitle: 'Sector-specific advice',
      description:
        'Regulatory risk assessment, licensing, and interaction with regulators across industries.',
      image: 'commercial-litigation.png',
      bullets: ['Licensing', 'Regulatory filings', 'Compliance programs'],
    },
    // {
    //   id: 'employment',
    //   title: 'Employment Law',
    //   subtitle: 'Employer & employee matters',
    //   description:
    //     'Contracts, workplace investigations, termination advice and employment dispute resolution.',
    //   image: 'commercial-litigation.png',
    //   bullets: ['Contract drafting', 'Investigations', 'Dispute resolution'],
    // },
    // {
    //   id: 'intellectual-property',
    //   title: 'IP & Technology',
    //   subtitle: 'Protection & commercialization',
    //   description:
    //     'IP registration strategy, licensing, technology transfer and enforcement.',
    //   image: 'commercial-litigation.png',
    //   bullets: ['Patents & trademarks', 'Licensing', 'Tech transactions'],
    // },
    // {
    //   id: 'dispute-resolution',
    //   title: 'Alternative Dispute Resolution',
    //   subtitle: 'Arbitration & mediation',
    //   description:
    //     'Tailored ADR solutions to resolve conflicts efficiently and confidentially.',
    //   image: 'commercial-litigation.png',
    //   bullets: ['Arbitration', 'Mediation', 'Neutral evaluations'],
    // },
  ];

  // navigate to a service detail page (adjust route to your router config)
  goToService(id: string) {
    // this.router.navigate(['/services', id]);
    this.router.navigate(['/practice-areas'], { fragment: id });
  }

  trackById(_: number, item: ServiceCard) {
    return item.id;
  }
}
