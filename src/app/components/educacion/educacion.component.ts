import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { educacion } from 'src/app/model/persona.model';

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

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getEducacion().subscribe(data => {
      console.log(data);
      this.educacionlist = data;
    });
  }
  isLogged() {
    return true;
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.datosPortfolio.deleteEducacion(id).subscribe(
        data => {
          this.datosPortfolio.getEducacion();
        }, err => {
          alert("No se pudo eliminar")
        }
      )
    }
  }


}

