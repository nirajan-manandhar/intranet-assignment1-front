import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'

let httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL: string = 'https://ham-manandhar-assn1-back.azurewebsites.net/api/';
  token: string;
  role: string;
  user: User;
  constructor(private http: HttpClient) { }

  doRegsiter(username: string, password: string) {

  }

  doLogin(username: string, password: string) {
    let payload = {
      "Username": username,
      "Password": password
    }
    return this.http.post<any>(this.URL + 'users/login', payload).pipe(map(user => {
      this.token = user.token;
      this.role = user.user.role;
      this.user = user.user;
      return user;
    })).toPromise();
  }

  doLogOut() {
    this.token = null;
    this.role = null;
    this.user = null;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
