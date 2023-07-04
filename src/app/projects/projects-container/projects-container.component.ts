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
  loading: boolean = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.search('');
  }

  onSearch(term: string) {
    this.search(term);
  }

  search(term: string) {
    this.loading = true;
    this.projectService.listByName(term).subscribe(
      (data) => {
        this.loading = false;
        this.projects = data;
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error;
      }
    );
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    this.projectService.put(project).subscribe(
      (updatedProject) => {
        const index = this.projects.findIndex(
          (element) => element.id === project.id
        );
        this.projects[index] = project;
      },
      (error) => (this.errorMessage = error)
    );
  }
}
