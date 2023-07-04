import { Component, OnInit } from '@angular/core';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = MOCK_PROJECTS;
  constructor() {}

  ngOnInit(): void {}
}
