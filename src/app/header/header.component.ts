import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

translate = inject(TranslationService);
selectedLanguage: string = 'en';

  reloadPage() {
    window.location.reload();
  }

  @Input() isMenuOpen: boolean | undefined;
  @Output() toggleMenuEvent = new EventEmitter<void>();

  toggleMenu() {
    this.toggleMenuEvent.emit();
  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.switchLanguage(language); // Aufrufen der Übersetzungsmethode
  }

  handleLinkClick(event: MouseEvent) {
    const link = event.target as HTMLElement; // Erfasse den angeklickten Link
    if (link) {
      link.classList.add('clicked'); // Füge dem angeklickten Link die Klasse 'clicked' hinzu
      setTimeout(() => {
        link.classList.remove('clicked'); // Entferne die Klasse 'clicked' nach 1 Sekunde
      }, 1000);
    }
  }

  ngOnInit(): void {
    AOS.init({
        duration: 3000,
        easing: 'ease'
    });
  }
}
