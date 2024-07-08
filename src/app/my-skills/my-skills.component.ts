import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit(): void {
    AOS.init({
        duration: 1000,
        easing: 'ease',
        // once: true,
        // offset: 500
        // anchorPlacement: 'top-bottom', 
        // startEvent: 'DOMContentLoaded' 
    });
  }

  getFontSize(): number {
    const headingElement = document.getElementById('headline');
    if (headingElement) {
      const textLength = headingElement.innerText.trim().length;
      if (window.innerWidth <= 400 && textLength <= 9) {
        return 54; 
      } else if (window.innerWidth <= 420 && textLength > 9) {
        return 42; 
      } else if (window.innerWidth <= 475 && textLength <= 9) {
        return 66; 
      } else if (window.innerWidth <= 625 && textLength > 9) {
        return 60; 
      } else if (window.innerWidth <= 1200 && textLength > 9) {
        return 90; 
      } else if (window.innerWidth <= 1350 && textLength > 9) {
        return 70; 
      } else {
        return 90; 
      }
    }
    return 90; 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  }
}
  

