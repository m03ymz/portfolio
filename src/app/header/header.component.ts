import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  reloadPage() {
    window.location.reload();
  }

  @Input() isMenuOpen: boolean | undefined;
  @Output() toggleMenuEvent = new EventEmitter<void>();

  toggleMenu() {
    this.toggleMenuEvent.emit();
  }

}
