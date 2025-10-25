import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOGS } from '../../data/blogs';

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
  selector: 'app-blogs',
  imports: [RouterLink],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs {
  blogs: BlogCard[] = BLOGS.slice(0, 3);

  trackById(_: number, item: BlogCard) {
    return item.id;
  }
}
