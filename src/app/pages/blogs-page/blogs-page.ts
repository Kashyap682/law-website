import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';

export interface BlogCard {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  url: string; // external link
}

@Component({
  selector: 'app-blogs-page',
  imports: [],
  templateUrl: './blogs-page.html',
  styleUrl: './blogs-page.css'
})
export class BlogsPage {
  blogs: BlogCard[] = [
    {
      id: 'corporate-compliance',
      title: 'Navigating Corporate Compliance in 2025',
      date: 'Sep 12, 2025',
      excerpt:
        'With new regulations coming into effect, companies must adopt practical compliance frameworks to avoid penalties...',
      image: 'commercial-litigation.png',
      url: 'https://www.reddit.com',
    },
    {
      id: 'dispute-resolution',
      title: 'The Rise of Alternative Dispute Resolution',
      date: 'Aug 30, 2025',
      excerpt:
        'ADR is increasingly favored for its speed and cost-effectiveness. Here’s what businesses should know before opting in...',
      image: 'commercial-litigation.png',
      url: 'https://www.reddit.com',
    },
    {
      id: 'contract-tips',
      title: '5 Contract Drafting Mistakes to Avoid',
      date: 'Aug 10, 2025',
      excerpt:
        'Poorly drafted contracts can lead to disputes. These five common mistakes could save you from litigation down the road...',
      image: 'commercial-litigation.png',
      url: 'https://www.reddit.com',
    },
    {
      id: 'data-protection',
      title: 'Data Protection: Practical Steps for SMEs',
      date: 'Jul 21, 2025',
      excerpt:
        'A short checklist SMEs can adopt to reduce privacy risk and regulatory exposure when handling customer data...',
      image: 'commercial-litigation.png',
      url: 'https://www.reddit.com',
    },
    {
      id: 'mna-checklist',
      title: 'M&A Checklist for Founders',
      date: 'Jun 04, 2025',
      excerpt:
        'Preparing for an acquisition? Here’s a concise checklist to make due diligence smooth and maximise value...',
      image: 'commercial-litigation.png',
      url: 'https://www.reddit.com',
    },
    {
      id: 'employment-guidance',
      title: 'Employment Policies that Reduce Legal Risk',
      date: 'May 15, 2025',
      excerpt:
        'Simple, enforceable employment policies every business should have — and how to roll them out with minimal friction.',
      image: 'commercial-litigation.png',
      url: 'https://www.reddit.com',
    },
  ];

  trackById(_: number, item: BlogCard) {
    return item.id;
  }
}
