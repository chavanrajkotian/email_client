import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authService: AuthService, private router: Router){}

  signInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  })

  get username(){
    return this.signInForm.get('username') as FormControl
  }

  get password(){
    return this.signInForm.get('password') as FormControl
  }

  get passwordConfirmation(){
    return this.signInForm.get('passwordConfirmation') as FormControl
  }

  onSubmit(){
    if(this.signInForm.invalid){
      return
    }

    this.authService.signIn(this.signInForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox')
      },
      error: err => {
        if(err.error.username || err.error.password){
          this.signInForm.setErrors({credentials: true})
        }
      } 
    })
  }
}
