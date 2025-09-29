import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bullets: string[];
}

@Component({
  selector: 'app-practice-areas',
  imports: [CommonModule],
  templateUrl: './practice-areas.html',
  styleUrl: './practice-areas.css'
})
export class PracticeAreas {
  services: ServiceCard[] = [
    {
      id: 'litigation',
      title: 'Commercial Litigation',
      subtitle: 'Disputes & remedies',
      description:
        'Representation in breach of contract, shareholder disputes, and commercial litigation matters.',
      image: 'commercial-litigation.png',
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
    {
      id: 'employment',
      title: 'Employment Law',
      subtitle: 'Employer & employee matters',
      description:
        'Contracts, workplace investigations, termination advice and employment dispute resolution.',
      image: 'commercial-litigation.png',
      bullets: ['Contract drafting', 'Investigations', 'Dispute resolution'],
    },
    {
      id: 'intellectual-property',
      title: 'IP & Technology',
      subtitle: 'Protection & commercialization',
      description:
        'IP registration strategy, licensing, technology transfer and enforcement.',
      image: 'commercial-litigation.png',
      bullets: ['Patents & trademarks', 'Licensing', 'Tech transactions'],
    },
    {
      id: 'dispute-resolution',
      title: 'Alternative Dispute Resolution',
      subtitle: 'Arbitration & mediation',
      description:
        'Tailored ADR solutions to resolve conflicts efficiently and confidentially.',
      image: 'commercial-litigation.png',
      bullets: ['Arbitration', 'Mediation', 'Neutral evaluations'],
    },
  ];

  @Output() start = new EventEmitter<ServiceCard>();
  selectedId?: string;

  ngOnInit(): void {
    const hash = (location.hash || '').replace('#', '');
    if (hash && this.services.some(s => s.id === hash)) {
      this.selectedId = hash;
    } else if (this.services.length) {
      this.selectedId = this.services[0].id;
    }
    if (this.selectedId) history.replaceState(null, '', `#${this.selectedId}`);
  }

  get selected(): ServiceCard | undefined {
    return this.services.find(s => s.id === this.selectedId);
  }

  select(id: string, pushState = true) {
    if (this.selectedId === id) return;
    this.selectedId = id;
    if (pushState) history.replaceState(null, '', `#${id}`);
  }

  onGetStarted() {
    if (this.selected) this.start.emit(this.selected);
  }

  @HostListener('window:hashchange')
  onHashChange() {
    const hash = (location.hash || '').replace('#', '');
    if (hash && this.services.some(s => s.id === hash)) {
      this.select(hash, false);
    }
  }
}
