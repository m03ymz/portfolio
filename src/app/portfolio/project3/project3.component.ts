import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from '../../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-project3',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project3.component.html',
  styleUrl: './project3.component.scss'
})
export class Project3Component implements OnInit {

  translate = inject(TranslationService);

  ngOnInit(): void {
    AOS.init({
        duration: 1000,
        easing: 'ease',
        // once: true,
        // offset: 500
        // anchorPlacement: 'top-bottom', 
        // startEvent: 'DOMContentLoaded' 
    });
  }

}
