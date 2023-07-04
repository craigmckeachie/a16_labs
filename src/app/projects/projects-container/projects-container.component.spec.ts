import { Component, Input } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

import { ProjectsContainerComponent } from './projects-container.component';

@Component({ selector: 'app-project-list', template: '' })
class ProjectListStubComponent {
  @Input()
  projects: Project[] = [];
}

export class ProjectServiceStub {
  listByName(): Observable<Project[]> {
    return of(MOCK_PROJECTS);
  }
}

describe('ProjectsContainerComponent', () => {
  let component: ProjectsContainerComponent;
  let fixture: ComponentFixture<ProjectsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsContainerComponent, ProjectListStubComponent],
      providers: [{ provide: ProjectService, useClass: ProjectServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(
  //   'should have projects',
  //   waitForAsync(() => {
  //     fixture.whenStable().then(() => {
  //       expect(component.projects.length).toEqual(7);
  //     });
  //   })
  // );

  it('should have projects', fakeAsync(() => {
    component.ngOnInit();
    tick(300); //debounce time
    expect(component.projects.length).toEqual(7);
  }));
});
