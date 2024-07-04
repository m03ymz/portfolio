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
        return 54; // Schriftgröße 54px für Bildschirmbreiten bis 400px und Textlänge 9 oder weniger
      } else if (window.innerWidth <= 420 && textLength > 9) {
        return 42; // Schriftgröße 40px für Bildschirmbreiten von 401px bis 420px und Textlänge über 9
      } else if (window.innerWidth <= 475 && textLength <= 9) {
        return 66; // Schriftgröße 66px für Bildschirmbreiten von 421px bis 475px und Textlänge 9 oder weniger
      } else if (window.innerWidth <= 625 && textLength > 9) {
        return 60; // Schriftgröße 60px für Bildschirmbreiten von 476px bis 575px und Textlänge über 9
      } else if (window.innerWidth <= 1200 && textLength > 9) {
        return 90; // Schriftgröße 60px für Bildschirmbreiten von 476px bis 575px und Textlänge über 9
      } else if (window.innerWidth <= 1350 && textLength > 9) {
        return 70; // Schriftgröße 80px für Bildschirmbreiten bis 1350px und Textlänge über 9
      } else {
        return 90; // Standard-Schriftgröße 90px für größere Bildschirme oder Textlänge 9 oder weniger
      }
    }
    return 90; // Standard-Schriftgröße, falls Element nicht gefunden wird
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Eventuell benötigte Logik bei Größenänderungen des Fensters
  }
}
  

