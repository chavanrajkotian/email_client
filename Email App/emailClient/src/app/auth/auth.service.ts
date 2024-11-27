import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUpPayload, SignUpResponse, UserNameResponse } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  rootUrl = 'https://api.angular-email.com/';

  getUsernameAvailability(username: string){
    return this.http.post<UserNameResponse>(`${this.rootUrl}auth/username`, { username: username});
  }

  signUpUser(credentials: signUpPayload){
    return this.http.post<SignUpResponse>(`${this.rootUrl}auth/signup`, credentials)
  }
}
