import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get isSignedIn() {
    return !!localStorage.getItem('auth_token');
  }

  static get authorizationToken() {
    return localStorage.getItem('auth_token') || undefined;
  }

  get authenticatedUser() {
    let payload = new JwtHelperService().decodeToken(
      UserService.authorizationToken
    );
    return payload;
  }

  constructor(
    private http: HttpClient // private jwtHelper: JwtHelperService
  ) {}

  signin(email: string, password: string) {
    return this.http
      .post(environment.backendUrl + '/auth/signin', { email, password })
      .pipe(
        map((res: any) => {
          if (res.success) {
            localStorage.setItem('auth_token', res.access_token);
          }
          return res.success;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(
            'The email or password you have entered is invalid.'
          );
        })
      );
  }

  signout() {
    localStorage.removeItem('auth_token');
  }
}
