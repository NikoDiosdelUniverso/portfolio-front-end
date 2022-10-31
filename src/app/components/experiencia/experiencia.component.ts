import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from 'src/app/model/persona.model';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faPlusCircle = faPlusCircle;
  faXmark = faXmark;
  experiencialist: experiencia[] = []
 

  constructor(private datosPortfolio: PortfolioService, private ruta: Router, private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.getExperiencia().subscribe(data => {
      console.log(data);
      this.experiencialist = data;
    });
  }

  cargarExp(): void{
    this.datosPortfolio.getExperiencia().subscribe(
      data =>{
        this.experiencialist = data;
      }
    )
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.datosPortfolio.deleteExp(id).subscribe(
        data => {
          this.cargarExp();
          this.ruta.navigate(['']);
        }, err => { alert("No se pudo eliminar")}
      )
    }
  }

  isLogged() {
    return this.authService.isLogged();
  }
}
