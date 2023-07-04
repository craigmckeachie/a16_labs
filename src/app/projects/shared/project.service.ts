import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PROJECTS } from './mock-projects';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  list(): Observable<Project[]> {
    return of(MOCK_PROJECTS);
  }
}
