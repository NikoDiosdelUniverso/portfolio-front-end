import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { habilidades } from 'src/app/model/persona.model';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faPlusCircle = faPlusCircle;
  faXmark = faXmark;
  skillslist:habilidades[] = []
  

  constructor(private datosPortfolio:PortfolioService, private ruta: Router, private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.getHabilidades().subscribe(data =>{
      console.log(data); 
      this.skillslist=data;
    });
  }

  cargarHabilidad(): void{
    this.datosPortfolio.getHabilidades().subscribe(
      data =>{
        this.skillslist = data;
      }
    )
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.datosPortfolio.deleteSkill(id).subscribe(
        data => {
          this.cargarHabilidad();
          this.ruta.navigate(['']);
        }, err => { alert("No se pudo eliminar")}
      )
    }
  }

  isLogged() {
    return this.authService.isLogged();
  }
}
 