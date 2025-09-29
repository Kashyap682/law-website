import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Services } from '../../shared/services/services';
import { Blogs } from '../../shared/blogs/blogs';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Blogs],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
