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

  getFontSize(): number {
    const headingElement = document.getElementById('me');
    if (headingElement) {
      const textLength = headingElement.innerText.trim().length;
      if (window.innerWidth <= 400) {
        if (textLength > 5) {
          return 22; // Schriftgröße 22px für Textlänge über 5 und Bildschirmbreiten bis 400px
        } else {
          return 26; // Schriftgröße 26px für Textlänge 5 oder weniger und Bildschirmbreiten bis 400px
        }
      } else if (window.innerWidth <= 525) {
        if (textLength > 5) {
          return 24; // Schriftgröße 24px für Textlänge über 5 und Bildschirmbreiten von 401px bis 525px
        } else {
          return 36; // Schriftgröße 36px für Textlänge 5 oder weniger und Bildschirmbreiten von 401px bis 525px
        }
      } else if (window.innerWidth <= 650) {
        if (textLength > 5) {
          return 28; // Schriftgröße 28px für Textlänge über 5 und Bildschirmbreiten von 526px bis 650px
        } else {
          return 36; // Schriftgröße 36px für Textlänge 5 oder weniger und Bildschirmbreiten von 526px bis 650px
        }
      } else if (window.innerWidth <= 1500) {
        if (textLength > 5) {
          return 38; // Schriftgröße 38px für Textlänge über 5 und Bildschirmbreiten von 651px bis 1500px
        } else {
          return 44; // Schriftgröße 44px für Textlänge 5 oder weniger und Bildschirmbreiten bis 1500px
        }
      } else if (window.innerWidth <= 1700 && textLength > 5) {
        return 44; // Schriftgröße 44px für Textlänge über 5 und Bildschirmbreiten von 1501px bis 1700px
      } else {
        return textLength > 5 ? 48 : 64; // Schriftgröße 48px für Textlänge 5 oder weniger oder größere Bildschirme
      }
    }
    return 64; // Standard-Schriftgröße, falls Element nicht gefunden wird oder leer ist
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Eventuell benötigte Logik bei Größenänderungen des Fensters
  }
  
}
