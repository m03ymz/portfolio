import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

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
  
}
