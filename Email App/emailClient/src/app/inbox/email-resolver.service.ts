import { Injectable } from '@angular/core';
import { Resolve,  ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { EmailByIdResponse } from './email.model';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<EmailByIdResponse> {

  constructor(private emailService: EmailService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot){
    const { id } = route.params;
    return this.emailService.getEmailById(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found')
        return EMPTY;
      })
    )
  }
}
