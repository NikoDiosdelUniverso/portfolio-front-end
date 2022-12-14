import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { proyectos } from 'src/app/model/persona.model';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faPlusCircle = faPlusCircle;
  faXmark = faXmark;
proyectoslist: proyectos[] = []
  
  constructor(private datosPortfolio:PortfolioService, private ruta: Router, private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.getProyectos().subscribe(data =>{
      console.log(data); 
      this.proyectoslist=data;
    });
  }

  cargarProyectos(): void{
    this.datosPortfolio.getProyectos().subscribe(
      data =>{
        this.proyectoslist = data;
      }
    )
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.datosPortfolio.deleteProyecto(id).subscribe(
        data => {
          this.cargarProyectos();
          this.ruta.navigate(['']);
        }, err => { alert("No se pudo eliminar")}
      )
    }
  }

  isLogged() {
    return this.authService.isLogged();
  }
} 
