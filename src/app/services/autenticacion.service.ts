import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "https://portfolio-back-end-wucr.onrender.com/auth/login"
  user: User = new User();

  constructor(private http: HttpClient) {
  }

  //crea un token si el login es correcto
  iniciarSesion(usuario: User) {
    this.http.post<any>(this.url, usuario).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', JSON.stringify(usuario));
    }, (error) => { console.error(error); });
  }

  //si existe en token, el usuario esta logueado
  public isLogged() {
    return localStorage.getItem('token') !== null;
  }

  // elimina el token al cerrar la sesion
  logout() {
    localStorage.removeItem('token');
  }
}




