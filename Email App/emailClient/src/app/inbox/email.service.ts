import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailByIdResponse, EmailSubmissionResponse, EmailSummary } from './email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl: string = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmailSummary(){
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`)
  }

  getEmailById(id: string){
    return this.http.get<EmailByIdResponse>(`${this.rootUrl}/emails/${id}`)
  }

  sendEmail(email: EmailSubmissionResponse){
    return this.http.post(`${this.rootUrl}/emails`, email);
  }

}
