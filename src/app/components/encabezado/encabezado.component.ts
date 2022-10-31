import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  login: string;
  constructor(private authService: AutenticacionService) { }

  ngOnInit(): void {
console.log("Logueado: "+this.isLogged());
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logintext() {
    let login= "Login";
    if (this.isLogged()){
      login= "Logout";
    };
  }
}
