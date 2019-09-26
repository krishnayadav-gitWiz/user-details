import { Injectable } from '@angular/core';
import {User} from './user.profile.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  users: User[] = [];
  
  getUser(id: string): Observable<User> {
    return this.http
      .get<{results: User}>('https://randomuser.me/api/?id=' + id).pipe(map(res => res.results));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<{results: User[]}>('https://randomuser.me/api/?results=100').pipe(map(res => res.results));
  }
}
