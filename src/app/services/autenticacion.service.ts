import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "http://localhost:3307/auth"
  user: User  = new User();

  constructor(private http: HttpClient ) {
  }


  login(userId: string, password: string) {
      return this.http.post<any>(this.url+"/login/", { userId, password })
          .pipe(map(user => {
              // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
              user.authdata = window.btoa(userId + ':' + password);
              localStorage.setItem('user', JSON.stringify(user));
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
  }
}




 