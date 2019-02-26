import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  URL: string = 'https://ham-manandhar-assn1-back.azurewebsites.net/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.userService.token
    })
  };

  constructor(private http: HttpClient, private userService: UserService) { }

  getAll() {
    return this.http.get<any>(this.URL + 'boats/', this.httpOptions).pipe(map(boats => {
      return boats;
    })).toPromise();
  }

  getBoatById(boatId) {
    return this.http.get<any>(this.URL + 'boats/' + boatId, this.httpOptions).pipe(map(boat => {
      return boat;
    })).toPromise();
  }

  add(payload) {
    return this.http.post<any>(this.URL + 'boats/', payload, this.httpOptions).pipe(map(boat => {
      return boat;
    })).toPromise();
  }

  updateById(boatId, payload) {
    return this.http.put<any>(this.URL + 'boats/' + boatId, payload, this.httpOptions).pipe(map(boat => {
      return boat;
    })).toPromise();
  }

  deleteById(boatId: number) {
    return this.http.delete<any>(this.URL + 'boats/' + boatId, this.httpOptions).pipe(map(boats => {
      return boats;
    })).toPromise();
  }
}
