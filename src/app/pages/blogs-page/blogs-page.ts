import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOGS } from '../../data/blogs'; // ✅ adjust path as needed

export interface BlogCard {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  abstract: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-blogs-page',
  imports: [RouterLink],
  templateUrl: './blogs-page.html',
  styleUrl: './blogs-page.css',
})
export class BlogsPage {
  // ✅ Use all entries from the shared BLOGS array
  blogs: BlogCard[] = BLOGS;

  trackById(_: number, item: BlogCard) {
    return item.id;
  }
}
