import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--- เพิ่มบรรทัดนี้

@Component({
  selector: 'app-greeting-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.scss']
})
export class GreetingPageComponent {} 