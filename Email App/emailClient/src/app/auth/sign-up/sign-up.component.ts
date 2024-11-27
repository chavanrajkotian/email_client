import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueName } from '../validators/unique-name';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ], [this.uniqueName.validate]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  }, { validators: [this.matchPassword.validate] }
  );

  constructor( private matchPassword: MatchPassword, private uniqueName: UniqueName, private authService: AuthService, private router: Router){}

  get username(){
    return this.signUpForm.get('username') as FormControl
  }

  get password(){
    return this.signUpForm.get('password') as FormControl
  }

  get passwordConfirmation(){
    return this.signUpForm.get('passwordConfirmation') as FormControl
  }

  onSubmit(){
    if(this.signUpForm.invalid){
      return
    }
    this.authService.signUp(this.signUpForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox')

      },
      error: err => {
        if(!err.status){
          this.signUpForm.setErrors({ noConnection: true })
        } else {
          this.signUpForm.setErrors({ unknownError: true })
        }
      }
    })
  }
}
