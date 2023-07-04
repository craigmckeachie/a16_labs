import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input()
  project!: Project;
  @Output()
  edit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onEditClick(project: Project, event: Event) {
    event.preventDefault();
    this.edit.emit({ editingProject: project });
  }
}
