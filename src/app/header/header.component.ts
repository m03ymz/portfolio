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
  }
}
