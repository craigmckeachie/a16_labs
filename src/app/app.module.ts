import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './core/auth.interceptor';
import { UserService } from './account/shared/user.service';

export function tokenGetter() {
  return UserService.authorizationToken ?? '';
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HttpClientModule,
    HomeModule,
    AccountModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200', 'localhost:3000'],
        disallowedRoutes: [
          // '//localhost:4200/home/',
          // '//localhost:4200/signin/',
        ],
      },
    }),
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
