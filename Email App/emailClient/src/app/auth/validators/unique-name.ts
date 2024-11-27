import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs'
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class UniqueName implements AsyncValidator {

    constructor (private authService: AuthService){}

    validate = (control: AbstractControl): Observable<any> => {
        const { value } = control;
        return this.authService.userNameAvailable(value)
        .pipe(
            map(() => {
                return null;
            }),
            catchError((err) => {
                if(err.error.username){
                    return of({ nonUniqueUseName : true})
                } else {
                    return of({ responseFailed : true})
                }
            })
        )
    }
}
