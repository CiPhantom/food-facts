import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './model/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:8090";

  constructor(private httpClient : HttpClient) { }

  doLogin(loginRequest : LoginRequest) {
    return this.httpClient.post(this.baseUrl + "/user/authenticate", loginRequest);
  }
}
