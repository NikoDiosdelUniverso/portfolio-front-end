import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { persona } from 'src/app/model/persona.model';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  pers: persona;
  faPenToSquare = faPenToSquare;
  faPlusCircle = faPlusCircle;
  faXmark = faXmark;
  

  constructor(private datosPortfolio: PortfolioService, private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona(1).subscribe(data => {
      console.log(data);
      this.pers = data;
    });
  }

  isLogged() {
    return this.authService.isLogged();
  }
} 
