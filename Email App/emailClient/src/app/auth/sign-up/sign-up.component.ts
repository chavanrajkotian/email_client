import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueName } from '../validators/unique-name';
import { AuthService } from '../auth.service';
import { signUpPayload } from '../auth.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [ this.uniqueName.validate]
    ),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  }, { validators: [ this.matchPassword.validate]})

  constructor(
    private matchPassword: MatchPassword,
    private uniqueName: UniqueName,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get username(){
    return this.signUpForm.controls['username'] as FormControl;
  }

  get password(){
    return this.signUpForm.controls['password'] as FormControl;
  }

  get confirmPassword(){
    return this.signUpForm.controls['confirmPassword'] as FormControl;
  }

  onSignUp(){
    if(this.signUpForm.invalid){
      return;
    }
    const formValue = this.signUpForm.value;
    const payload: signUpPayload = {
      username: formValue.username,
      password: formValue.password,
      passwordConfirmation: formValue.confirmPassword
    }
    this.authService.signUpUser(payload).subscribe(()=> {})
  }

}
