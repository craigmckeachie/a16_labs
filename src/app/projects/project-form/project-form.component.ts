import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  @Input()
  project!: Project;

  @Output()
  cancel = new EventEmitter<void>();

  projectForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name),
      description: new FormControl(this.project.description),
      budget: new FormControl(this.project.budget),
      isActive: new FormControl(this.project.isActive),
    });
  }

  onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }
}
