import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from '../../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-project2',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project2.component.html',
  styleUrl: './project2.component.scss'
})
export class Project2Component implements OnInit {

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
