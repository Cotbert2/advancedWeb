import { Component, Input } from '@angular/core';
import { IProjectData } from '../../../../models';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectData!: IProjectData;
}
