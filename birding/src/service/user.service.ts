import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApi = 'http://localhost:54867/api/';
  url: string;
  // tslint:disable-next-line: variable-name
  private _userIn$ = new ReplaySubject<IUser>(1);
  public get userIn$(): Observable<IUser> {
    return this._userIn$.asObservable();
  }

  public get isConnected$(): Observable<boolean> {
    return this._userIn$.pipe(map(u => !!u));
  }

  navToLogin() {
    const url = 'login';
    this.router.navigate([url]);
  }
  setUser(user: IUser) {

    this._userIn$.next(user);
    /* כניסה למערכת */
    const url = 'home/birdList';
    this.router.navigate([url]);

  }
  constructor(private http: HttpClient, private router: Router) { }

  login(user) {
    console.log('email:' + user.username + 'password:' + user.password);
    this.url = this.baseApi + 'User';
    return this.http.post<IUser>(this.url, user);

  }
  register(user) {

    this.url = this.baseApi + 'Register';
    return this.http.post<number>(this.url, user);

  }
  getListOfUsers(): Observable<IUser[]> {
    this.url = this.baseApi + 'User';
    return this.http.get<IUser[]>(this.url);

  }


}

