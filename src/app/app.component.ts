import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ReferencesComponent } from './references/references.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Project1Component } from './portfolio/project1/project1.component';
import { Project2Component } from './portfolio/project2/project2.component';
import { Project3Component } from './portfolio/project3/project3.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { OverlayComponent } from './overlay/overlay.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import AOS from 'aos';
import { MainContentComponent } from './main-content/main-content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    OverlayComponent,
    AboveTheFoldComponent,
    ReferencesComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    ContactComponent,
    FooterComponent,
    MatSnackBarModule,
    MainContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'portfolio';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    AOS.init();
  }
}
