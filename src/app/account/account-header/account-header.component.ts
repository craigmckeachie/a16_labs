import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css'],
})
export class AccountHeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}

  get isSignedIn() {
    return this.userService.isSignedIn;
  }

  get authenticatedUser() {
    return this.userService.authenticatedUser;
  }

  signout(event: Event) {
    event.preventDefault();
    this.userService.signout();
    this.router.navigate(['/']);
  }
}
