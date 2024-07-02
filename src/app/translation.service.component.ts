import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  use(language: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); 
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
