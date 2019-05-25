import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

    const headers = new HttpHeaders({
      'token-user': 'qmaSADg5v4sfdZfg654aSDF3dasfASDsfg3a'
    });
    return this.httpClient.get(`https://reqres.in/api/users`, { params, headers });
  }
}
