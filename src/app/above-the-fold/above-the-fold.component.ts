import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
  
}
