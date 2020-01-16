import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private role = 'USER';

  login(): Observable<boolean | string> | string {
    /* return of(this.role)
    .pipe(delay(3000)); */
    return this.role;
  }
}
