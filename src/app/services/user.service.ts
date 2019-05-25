import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map} from 'rxjs/operators';

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

    return this.httpClient.get(`https://reqres123.in/api/users`, { params }).pipe(
      map( res => res['data'] )
    );
  }
}
