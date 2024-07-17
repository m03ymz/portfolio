import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  translate = inject(TranslationService);

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollen zum Seitenanfang
  }

  scrollToTopImprint() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollen zum Seitenanfang
  }
}
