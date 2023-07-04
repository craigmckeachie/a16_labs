import { Component, OnInit } from '@angular/core';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = [];
  errorMessage: string = '';
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.list().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    const index = this.projects.findIndex(
      (element) => element.id === project.id
    );
    this.projects[index] = project;
  }
}
