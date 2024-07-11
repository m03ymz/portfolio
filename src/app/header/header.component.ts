import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

translate = inject(TranslationService);
selectedLanguage: string = 'en';

  @Input() isMenuOpen: boolean | undefined;
  @Output() toggleMenuEvent = new EventEmitter<void>();

  constructor(private translationService: TranslationService) {}

  toggleMenu() {
    this.toggleMenuEvent.emit();
  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.switchLanguage(language); 
  }

  handleLinkClick(event: MouseEvent) {
    const link = event.target as HTMLElement; 
    if (link) {
      link.classList.add('clicked'); 
      setTimeout(() => {
        link.classList.remove('clicked'); 
      }, 1000);
    }
  }

  ngOnInit(): void {
    AOS.init({
        duration: 3000,
        easing: 'ease',
        once: true
    });
     // Überprüfen, ob bereits eine Sprache ausgewählt wurde
     const currentLanguage = this.translationService.getCurrentLanguage();

     // Falls eine Sprache ausgewählt wurde, verwenden wir sie
     if (currentLanguage) {
       this.selectedLanguage = currentLanguage;
     }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollen zum Seitenanfang
  }

  scrollToAboutMe() {
    const aboutMeElement = document.getElementById('about-me');
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToSkills() {
    const skillsElement = document.getElementById('my-skills');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToPortfolio() {
    const portfolioElement = document.getElementById('portfolio-join');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
