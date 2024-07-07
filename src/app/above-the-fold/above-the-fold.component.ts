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

  // showUpButton2Flag: boolean = false;

  // showUpButton2() {
  //   this.showUpButton2Flag = true;
  // }

  // hideUpButton2() {
  //   this.showUpButton2Flag = false;
  // }

  // scrollToBottom() {
  //   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Nach unten scrollen
  // }

  ngOnInit(): void {
    AOS.init({
        // duration: 5000,
        // easing: 'ease-in-out',
        // once: true,
    });
  }

  // getFontSize(): number {
  //   const headingElement = document.getElementById('me');
  //   if (headingElement) {
  //     const textLength = headingElement.innerText.trim().length;
  //     if (window.innerWidth <= 400) {
  //       if (textLength > 5) {
  //         return 18; 
  //       } else {
  //         return 26; 
  //       }
  //     } else if (window.innerWidth <= 525) {
  //       if (textLength > 5) {
  //         return 20; 
  //       } else {
  //         return 32; 
  //       }
  //     } else if (window.innerWidth <= 650) {
  //       if (textLength > 5) {
  //         return 24; 
  //       } else {
  //         return 32; 
  //       }
  //     } else if (window.innerWidth <= 1500) {
  //       if (textLength > 5) {
  //         return 30; 
  //       } else {
  //         return 40; 
  //       }
  //     } else if (window.innerWidth <= 1700 && textLength > 5) {
  //       return 32; 
  //     } else {
  //       return 48; 
  //     }
  //   }
  //   return 64; 
  // }

  getFontSize(): number {
    const headingElement = document.getElementById('me');
    if (headingElement) {
      const textLength = headingElement.innerText.trim().length;
      if (window.innerWidth <= 400) {
        if (textLength > 5) {
          return 16;
        } else {
          return 26;
        }
      } else if (window.innerWidth <= 525) {
        if (textLength > 5) {
          return 18;
        } else {
          return 30;
        }
      } else if (window.innerWidth <= 650) {
        if (textLength > 5) {
          return 24;
        } else {
          return 32;
        }
      } else if (window.innerWidth <= 1500) {
        if (textLength > 5) {
          return 30;
        } else {
          return 46;
        }
      } else if (window.innerWidth <= 1700) {
        if (textLength > 5) {
          return 36;
        } else {
          return 54;
        }
      } else {
        if (textLength > 5) {
          return 48;
        } else {
          return 70;
        }
      }
    }
    return 64; // Diese Zeile wird nur erreicht, wenn das headingElement nicht gefunden wird.
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Eventuell benötigte Logik bei Größenänderungen des Fensters
  }
  
}
