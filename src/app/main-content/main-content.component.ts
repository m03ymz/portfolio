import { AfterViewInit, Component, HostListener } from '@angular/core';
import { AboveTheFoldComponent } from "../above-the-fold/above-the-fold.component";
import { ReferencesComponent } from "../references/references.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { Project1Component } from "../portfolio/project1/project1.component";
import { Project2Component } from "../portfolio/project2/project2.component";
import { Project3Component } from "../portfolio/project3/project3.component";
import { ContactComponent } from "../contact/contact.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [AboveTheFoldComponent, ReferencesComponent, AboutMeComponent, MySkillsComponent, Project1Component, Project2Component, Project3Component, ContactComponent]
})
export class MainContentComponent implements AfterViewInit {

  //   constructor(private route: ActivatedRoute) { }

  // ngAfterViewInit(): void {
  //   this.route.fragment.subscribe(fragment => {
  //     if (fragment) {
  //       this.scrollToElement(fragment);
  //     }
  //   });
  // }

  // scrollToElement(elementId: string): void {
  //   const element = document.getElementById(elementId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }


  currentFragment: string | null = null; // Variable zur Speicherung des aktuellen Fragments

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterViewInit(): void {
    // Überprüfen und ggf. scrollen zum Fragment beim Initialisieren der Komponente
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => { // Verzögerung, um sicherzustellen, dass die Seite vollständig geladen ist
        this.scrollToElement(fragment);
      }, 0);
    }
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // HostListener für das Scroll-Ereignis der Fensteransicht
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const fragments = ['about-me', 'my-skills', 'portfolio-join', 'portfolio-el-pollo-loco', 'portfolio-pokedex', 'contact'];
    const currentPosition = window.pageYOffset + 200; // Offset, um einen Abstand vom oberen Rand zu halten
    let foundFragment = null;

    // Prüfen, welches Fragment aktuell sichtbar ist
    for (const fragment of fragments) {
      const element = document.getElementById(fragment);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        const elementBottom = elementTop + rect.height;

        if (currentPosition >= elementTop && currentPosition <= elementBottom) {
          foundFragment = fragment;
          break;
        }
      }
    }

    // Spezielle Behandlung für die Portfolio-Projekte, um sicherzustellen, dass 'portfolio' oben steht
    if (foundFragment === 'portfolio-join' || foundFragment === 'portfolio-el-pollo-loco' || foundFragment === 'portfolio-pokedex') {
      foundFragment = 'portfolio';
    }

    // Wenn das aktuelle Fragment geändert hat, aktualisiere die URL
    if (foundFragment !== this.currentFragment) {
      this.currentFragment = foundFragment;
      if (foundFragment) {
        this.updateFragment(foundFragment);
      } else {
        this.clearFragment();
      }
    }
  }

  // Methode zum Aktualisieren des Fragment-Teils der URL
  updateFragment(fragment: string): void {
    const url = `/main-content#${fragment}`;
    this.router.navigateByUrl(url, { replaceUrl: true });
  }

  // Methode zum Entfernen des Fragment-Teils aus der URL
  clearFragment(): void {
    this.router.navigateByUrl('/main-content', { replaceUrl: true });
  }

}
