import { Component, Input, OnInit } from '@angular/core';
import { EmailByIdResponse, EmailSubmissionResponse } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email!: EmailByIdResponse;

  constructor(private emailService: EmailService){}

  ngOnInit(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n------ ${this.email.from} wrote\n> ${text}`
    }
  }

  onSubmit(data: EmailSubmissionResponse){
    this.emailService.sendEmail(data).subscribe(()=> {
      this.showModal = false;
    })
  }
}
