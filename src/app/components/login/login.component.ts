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


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AutenticacionService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    this.authenticationService.logout();
    console.log("is logged: "+ this.isLogged())
  }

  signIn(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }{
      this.authenticationService.iniciarSesion(this.loginForm.value); 
    }
    console.log('Respuesta del servicio de login --> ', this.isLogged());
    this.router.navigateByUrl('');
  }

  get formControls() {
    return this.loginForm.controls;
  }

  get Usuario() {
    return this.loginForm.get('userId');
  }
  get Password() {
    return this.loginForm.get('password');
  }

  isLogged() {
    return this.authenticationService.isLogged();
  }
}




