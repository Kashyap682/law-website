import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { BLOGS } from '../../data/blogs';
import { Blog } from '../../data/blogs';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink],
  templateUrl: './blog-page.html'
})
export class BlogPage implements OnInit {
  blogs: Blog[] = BLOGS;
  currentBlog: Blog | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const slug = params['slug'];
      this.currentBlog = this.blogs.find((b) => b.slug === slug) || null;
    });
  }

  goToBlog(blog: Blog): void {
    this.router.navigate(['/blog', blog.slug]);
  }
}
