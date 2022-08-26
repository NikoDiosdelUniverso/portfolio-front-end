import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let userLogged = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    if(this.loginForm.valid) {
      if (this.loginForm.value.email === 'usuario' && this.loginForm.value.password === '123456') {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
    }

    return userLogged;
  }

  ngOnInit(): void {
  }

  get Usuario(){
    return this.loginForm.get('email');
  }
  get Password(){
    return this.loginForm.get('password');
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.loginForm.value).subscribe(data=>{
      console.log("DATA:"+ JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}
