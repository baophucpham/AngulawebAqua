import { SpinnerService } from './../../sharedComponent/spinner/spinner.service';
import { LoginService } from './login.service';
import { CustomValidator } from './../../validators/custom-validator';

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private loginService: LoginService,
    private router: Router,
    private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.initFormGroup();
  }

  handleLogin() {
    this.spinnerService.show();
    this.loginService.login(this.username, this.password).subscribe(res => {
      console.log(res);

      localStorage.setItem('accessToken', res.access_token);


      this.router.navigate(['/common'])
      this.spinnerService.hide();

    }, err => {
      // Toast err.error.message string
      this.spinnerService.hide();
    })
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
