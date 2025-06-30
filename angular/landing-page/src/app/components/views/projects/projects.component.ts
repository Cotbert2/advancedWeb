import { Component, OnInit, Signal } from '@angular/core';
import { IProjectData } from '../../../interfaces';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { AboutComponent } from "../about/about.component";
import { PersonalDataService } from '../../../services/personal-data.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, AboutComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  projects: Signal<IProjectData[]>;

  ngOnInit(): void {}


  constructor(
    private personalDataService: PersonalDataService
  ) {
    this.projects = this.personalDataService.getProjectsSignal();
  }




}
