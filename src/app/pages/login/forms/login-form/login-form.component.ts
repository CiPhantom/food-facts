import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/authenticationapi/login.service';
import { LoginRequest } from 'src/app/services/authenticationapi/model/login-request';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  form: FormGroup = new FormGroup(
    {
      login: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(10)])
    }
  );

  constructor(private loginService : LoginService) {}

  doLogin(formGroup) {
    if(formGroup.valid) {
      this.loginService.doLogin(formGroup.value as LoginRequest).subscribe((value) => {
        console.log("exist ?" + value)
      });
    }
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }
}
