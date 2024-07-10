import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {

  @Input() isMenuOpen: boolean | undefined;
  @Output() closeOverlay = new EventEmitter<void>();
  wasMenuOpen: any;

  closeMenu() {
    this.closeOverlay.emit();
  }

  translate = inject(TranslationService);
  selectedLanguage: string = 'en';

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.switchLanguage(language); 
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
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
