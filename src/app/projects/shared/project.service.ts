import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from './project.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/';
  constructor(private http: HttpClient) {}

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occurred loading the projects.');
      })
    );
  }
}
