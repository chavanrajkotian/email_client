import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({providedIn: 'root'})
export class UniqueName implements AsyncValidator {

    constructor(private authService: AuthService){}

    validate = (control: AbstractControl): Observable<any> => {
        const { value } = control;
        return this.authService.getUsernameAvailability(value).pipe(
            map(() => {
                return null;
            }),
            catchError((err) => {
                if(err.error.username){
                    return of({nonUniqueName: true})
                } else {
                    return of({responseFailed: true})
                }
            })
        )
    }
}
