import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  message: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: [],
      password: [],
    });
  }

  onSubmit() {
    const formValues = this.signinForm?.value;
    console.log(formValues);
    this.userService.signin(formValues.email, formValues.password).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/projects']);
        }
      },
      (error) => {
        this.message = error;
      }
    );
  }
}
