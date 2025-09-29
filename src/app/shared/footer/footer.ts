import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  year = new Date().getFullYear();

  practice = 'Practice Name';
  email = 'you@example.com';
  phone = '+1 (234) 567-890';
  address = '123 Main Street, City, Country';
}
