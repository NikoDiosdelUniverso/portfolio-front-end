import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "https://portfolio-abc.herokuapp.com/auth/login"
  user: User  = new User();

  constructor(private http: HttpClient ) {
  }

  iniciarSesion(usuario :User) {
    localStorage.setItem('token', JSON.stringify(usuario));
    return this.http.post<any>(this.url, usuario);
  }

  public isLogged(){
    return localStorage.getItem('token') !== null;
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('token');
  }
}




 