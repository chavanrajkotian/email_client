import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { UserNameResponse, SignUpResponse, SignedInResponse, SignInResponse } from './auth.model'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  rootUrl: string = 'https://api.angular-email.com';
  isSignedIn = new BehaviorSubject<any>(null);
  username = '';

  constructor(private http: HttpClient) { }

  userNameAvailable(username: string) {
    return this.http.post<UserNameResponse>(`${this.rootUrl}/auth/username`,
    { username: username})
  }

  signUp(credentials: any){
    return this.http.post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials)
    .pipe(
      tap(({username}) => { 
        this.isSignedIn.next(true);
        this.username = username;
      })
    )
  }

  checkAuthStatus(){
    return this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
    .pipe(
      tap(({authenticated, username})=> { 
        this.isSignedIn.next(authenticated);
        this.username = username;
      })
    )
  }

  signOut(){
    return this.http.post(`${this.rootUrl}/auth/signout`, {})
    .pipe(
      tap(() => { this.isSignedIn.next(false)})
    )
  }

  signIn(credentials: any){
    return this.http.post<SignInResponse>(`${this.rootUrl}/auth/signin`, credentials)
    .pipe(
      tap(({username}) => { 
        this.isSignedIn.next(true);
        this.username = username;
    })
    )
  }
}
