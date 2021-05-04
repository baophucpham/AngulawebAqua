import { CustomValidator } from './../../validators/custom-validator';

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginForm: FormGroup = new FormGroup({});
  submitted = false;
  constructor() {}

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.initFormGroup();
    console.log((this.username = ''));
  }

  onSubmit() {
    this.submitted = true;
    }

  initFormGroup() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        CustomValidator.required() as ValidatorFn,
      ]),
      password: new FormControl('', [
        CustomValidator.required() as ValidatorFn,
      ]),
    });
  }
}
