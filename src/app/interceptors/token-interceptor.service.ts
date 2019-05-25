import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Catching all requests through interceptor');

    const headers = new HttpHeaders({
      'token-user': 'qmaSADg5v4sfdZfg654aSDF3dasfASDsfg3a'
    });

    const request = req.clone({ headers });

    return next.handle( request ).pipe(
      catchError( this.manageErrors)
    );
  }

  manageErrors(error: HttpErrorResponse) {
    console.log('An error has ocurred');
    console.log('Adding error in log...');
    console.warn(error);
    return throwError('My custom error that will be displayed in console');
  }
}
