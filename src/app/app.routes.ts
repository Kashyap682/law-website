import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PracticeAreas } from './pages/practice-areas/practice-areas';
import { BlogsPage } from './pages/blogs-page/blogs-page';
import { About } from './pages/about/about';
import { Terms } from './pages/terms/terms';
import { Disclaimer } from './pages/disclaimer/disclaimer';
import { HomePage } from './pages/home-page/home-page';
import { BlogPage } from './pages/blog-page/blog-page';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: Home },
    { path: 'practice-areas', component: PracticeAreas },
    { path: 'blogs', component: BlogsPage },
    { path: 'about', component: About },
    { path: 'terms', component: Terms },
    { path: 'disclaimer', component: Disclaimer },
    { path: 'homev2', component: HomePage },
    { path: 'blog', component: BlogPage },
    { path: 'blog/:slug', component: BlogPage },
];
