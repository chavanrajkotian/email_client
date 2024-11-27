import { Component } from '@angular/core';
import { EmailByIdResponse, EmailSubmissionResponse } from '../email.model';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent {

  constructor(private authService: AuthService, private emailService: EmailService){}

  showModal = false;
  email: EmailByIdResponse = {
    id: '',
    subject: '',
    text: '',
    to: '',
    from: `${this.authService.username}@angular-email.com`,
    html: ''
  }

  onSubmit(data: EmailSubmissionResponse){
    this.emailService.sendEmail(data).subscribe(() => {
      this.showModal = false;
    })
  }
}
