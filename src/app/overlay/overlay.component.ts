import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
}
