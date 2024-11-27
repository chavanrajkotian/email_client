import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { EmailByIdResponse } from '../email.model';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
id: any
email!: EmailByIdResponse;

constructor(private route: ActivatedRoute){
  this.email = route.snapshot.data['email'];
  this.route.data.subscribe(({ email }) => {
    this.email = email;
    
  })
}
  ngOnInit(): void {
    // Solution 1: nested subscribes
    // Issue: Network speed delay may show the wrong ID
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmailById(id).subscribe( emailResponse => {
    //     console.log(emailResponse);
    //   })
    // })

    // Solution 2: using SwitchMap RxJs property
    // this.route.params.pipe(
    //   switchMap(({ id }) => {
    //     return this.emailService.getEmailById(id);
    //   })
    // ).subscribe(email => {
    //   this.email = email;
    // })
  }
}
