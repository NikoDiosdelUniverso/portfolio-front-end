import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-newexp',
  templateUrl: './newexp.component.html',
  styleUrls: ['./newexp.component.css']
})
export class NewexpComponent implements OnInit {
  posicion: string = "";
  empresa: string = "";
  inicio: string = "";
  fin: string = "";
  logo: string = "";
  descripcion: string = "";

  constructor(
    private pService: PortfolioService,
    private ruta: Router
  ) { }

  ngOnInit(): void {
  }
 
  onSubmit(value: any): void {
    console.log(value);
    const exp = new experiencia(this.posicion, this.empresa, this.inicio, this.fin, this.logo, this.descripcion);
    this.pService.saveExp(exp).subscribe(
      data => {
        alert("Experiencia añadida correctamente " + data);
        this.ruta.navigate(['']);
        window.location.reload();
      }, err => {
        alert("No se pudo añadir la experiencia: " + err);
        this.ruta.navigate(['']);
        window.location.reload();
      }
    )
  }

}
