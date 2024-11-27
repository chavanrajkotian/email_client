import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { EmailByIdResponse } from '../email.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email!: EmailByIdResponse;
  @Output() emailSubmit = new EventEmitter();
  emailForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })

  }

  get from(){
    return this.emailForm.get('from') as FormControl
  }
  get to(){
    return this.emailForm.get('to') as FormControl
  }
  get subject(){
    return this.emailForm.get('subject') as FormControl
  }
  get text(){
    return this.emailForm.get('text') as FormControl
  }

  onSubmit(){
    if(this.emailForm.invalid){
      return;
    }
    this.emailSubmit.emit(this.emailForm.value);
  }

}
