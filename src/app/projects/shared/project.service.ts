import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MOCK_PROJECTS } from './mock-projects';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/';
  constructor(private http: HttpClient) {}

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
