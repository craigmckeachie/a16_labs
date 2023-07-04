import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { MOCK_PROJECTS } from './mock-projects';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProjectService;
  let projectsUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProjectService);
    projectsUrl = environment.backendUrl + '/projects/';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list projects', () => {
    service.list().subscribe((data) => expect(data).toEqual(MOCK_PROJECTS));
    const request = httpTestingController.expectOne(projectsUrl);
    request.flush(MOCK_PROJECTS);
  });

  it('should return user friendly error when listing projects', () => {
    const notFoundErrorResponse = { status: 404, statusText: 'Not Found' };
    const content = 'The requested URL was not found on the server.';
    service.list().subscribe(
      (data) => {
        fail('expected an error');
      },
      (error) => {
        expect(error).toEqual('An error occurred loading the projects.');
      }
    );
    const request = httpTestingController.expectOne(projectsUrl);
    request.flush(content, notFoundErrorResponse);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
