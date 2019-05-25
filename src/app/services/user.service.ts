import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    let params = new HttpParams().append('page', '1');
    params = params.append('name', 'Irving Didier');

    return this.httpClient.get(`https://reqres.in/api/users`, { params }).pipe(
      map( res => res['data'] ),
      catchError( this.manageErrors )
    );
  }

  manageErrors(error: HttpErrorResponse) {
    console.log('An error has ocurred');
    console.warn(error);
    return throwError('My custom error that will be displayed in console');
  }
}
