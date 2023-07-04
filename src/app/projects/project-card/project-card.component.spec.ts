import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TruncateStringPipe } from 'src/app/shared/truncate-string.pipe';
import { Project } from '../shared/project.model';

import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCardComponent, TruncateStringPipe],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = new Project(
      1,
      'Mission Impossible',
      'This is really difficult.',
      'assets/placeimg_500_300_arch7.jpg',
      5,
      new Date(2015, 1, 2),
      30100,
      true,
      false
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('header should be project name', () => {
    const h5 = fixture.nativeElement.querySelector('h5');
    expect(h5.textContent).toEqual(component.project.name);
  });

  it('should raise event when edit clicked', () => {
    let projectBeingEdited!: Project | null;

    component.edit.subscribe(
      (event: any) => (projectBeingEdited = event.editingProject)
    );

    const editButtonDebugElement = fixture.debugElement.query(By.css('button'));
    editButtonDebugElement.triggerEventHandler('click', {
      preventDefault: () => {},
    });
    expect(projectBeingEdited).toEqual(component.project);
  });
});
