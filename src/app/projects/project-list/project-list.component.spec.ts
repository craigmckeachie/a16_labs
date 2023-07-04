import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListComponent } from './project-list.component';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { Project } from '../shared/project.model';
import { MOCK_PROJECTS } from '../shared/mock-projects';

@Component({ selector: 'app-project-card', template: '{{project | json}}' })
class ProjectCardStubComponent {
  @Input()
  project: Project | null = null;
  @Output()
  edit = new EventEmitter<any>();
}

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProjectListComponent, ProjectCardStubComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    component.projects = MOCK_PROJECTS;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects', () => {
    expect(component.projects.length).toEqual(7);
  });

  it('should display projects', () => {
    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Scarlet Weeknight');
    expect(content).toContain('Matdexon');
    expect(content).toContain('Remote Wrench');
  });
});
