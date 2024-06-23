import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit(): void {
    AOS.init({
        duration: 1000,
        easing: 'ease',
        // once: true,
        // offset: 200
        // anchorPlacement: 'top-bottom', 
        // startEvent: 'DOMContentLoaded' 
    });
}
  
}
