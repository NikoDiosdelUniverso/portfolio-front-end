import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  url: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AutenticacionService) 
    {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.url = "";
  }

  get Usuario() {
    return this.loginForm.get('userId');
  }
  get Password() {
    return this.loginForm.get('password');
  }
//los datos no estan llegando de la DB
  login() {
    let userLogged = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    if (this.loginForm.valid) {
      if (this.loginForm.value.userId === this.authenticationService.user.userId && this.loginForm.value.password === this.authenticationService.user.password) {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
      console.log('ELIMINAR ESTO DESPUES---', this.authenticationService.user.userId )
    }

    return userLogged;
  }

  onSubmit() {
    console.log("Enviar")
    this.submitted = true;
let validLogin= this.login();
    if (validLogin = 'login_invalid'  || 'invalid_form' ) {
   return;
    }

       this.loading = true;
    this.authenticationService.login(this.Usuario?.value, this.Password?.value);
    this.router.navigate([this.url]);
  }


}




