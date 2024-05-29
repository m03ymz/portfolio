import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
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


}
