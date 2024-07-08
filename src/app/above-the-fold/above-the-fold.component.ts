import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit(): void {
    AOS.init({
        // duration: 5000,
        // easing: 'ease-in-out',
        // once: true,
    });
  }

  getFontSize(): number {
    const headingElement = document.getElementById('me');
    if (headingElement) {
      const textLength = headingElement.innerText.trim().length;
      if (window.innerWidth <= 400) {
        if (textLength > 5) {
          return 15;
        } else {
          return 22;
        }
      } else if (window.innerWidth <= 525) {
        if (textLength > 5) {
          return 16;
        } else {
          return 26;
        }
      } else if (window.innerWidth <= 650) {
        if (textLength > 5) {
          return 20;
        } else {
          return 30;
        }
      } else if (window.innerWidth <= 1500) {
        if (textLength > 5) {
          return 28;
        } else {
          return 40;
        }
      } else if (window.innerWidth <= 1700) {
        if (textLength > 5) {
          return 32;
        } else {
          return 48;
        }
      } else {
        if (textLength > 5) {
          return 44;
        } else {
          return 66;
        }
      }
    }
    return 64; 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  }
  
}
