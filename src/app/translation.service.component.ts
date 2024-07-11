import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
// export class TranslationService {
//   instant(arg0: string): string {
//     throw new Error('Method not implemented.');
//   }
//   get(arg0: string) {
//     throw new Error('Method not implemented.');
//   }
//   use(language: string) {
//     throw new Error('Method not implemented.');
//   }

//   constructor(private translate: TranslateService) {
//     translate.setDefaultLang('en'); 
//   }

//   public switchLanguage(language: string): void {
//     this.translate.use(language);
//   }
// }

export class TranslationService {

  instant(arg0: string): string {
    throw new Error('Method not implemented.');
  }
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  use(language: string) {
    throw new Error('Method not implemented.');
  }

  private static currentLanguage: string; // Statische Variable für die aktuelle Sprache

  constructor(private translate: TranslateService) {
    if (!TranslationService.currentLanguage) {
      // Versuche, die Sprache aus dem Local Storage zu laden, falls vorhanden
      const storedLanguage = localStorage.getItem('selectedLanguage');
      TranslationService.currentLanguage = storedLanguage || this.translate.getDefaultLang();
    }
    this.translate.use(TranslationService.currentLanguage); // Verwende die aktuelle Sprache
  }

  public switchLanguage(language: string): void {
    this.translate.use(language); // Verwende die Sprache im TranslateService
    TranslationService.currentLanguage = language; // Aktualisiere die statische Variable für die aktuelle Sprache
    localStorage.setItem('selectedLanguage', language); // Speichere die Sprache im Local Storage
  }

  public getCurrentLanguage(): string {
    return TranslationService.currentLanguage; // Gib die aktuelle Sprache zurück
  }
}
