import { Component } from '@angular/core';
import { AboveTheFoldComponent } from "../above-the-fold/above-the-fold.component";
import { ReferencesComponent } from "../references/references.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { Project1Component } from "../portfolio/project1/project1.component";
import { Project2Component } from "../portfolio/project2/project2.component";
import { Project3Component } from "../portfolio/project3/project3.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [AboveTheFoldComponent, ReferencesComponent, AboutMeComponent, MySkillsComponent, Project1Component, Project2Component, Project3Component, ContactComponent]
})
export class MainContentComponent {

}
