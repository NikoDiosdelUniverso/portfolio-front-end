import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { educacion } from 'src/app/model/persona.model';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faPlusCircle = faPlusCircle;
  faXmark = faXmark;

  educacionlist: educacion[] = []

  constructor(private datosPortfolio: PortfolioService, private ruta: Router, private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.getEducacion().subscribe(data => {
      console.log(data);
      this.educacionlist = data;
    });
  }
 
  cargarEducacion(): void{
    this.datosPortfolio.getEducacion().subscribe(
      data =>{
        this.educacionlist = data;
      }
    )
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.datosPortfolio.deleteEducacion(id).subscribe(
        data => {
          this.cargarEducacion();
          this.ruta.navigate(['']);
        }, err => { alert("No se pudo eliminar")}
      )
    }
  }

  isLogged(){
    return this.authService.isLogged();
      }

}

