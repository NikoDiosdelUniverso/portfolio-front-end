import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
pers: persona;

  constructor(  private pService: PortfolioService,
    private activatedRouter: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.pService.getPersona(id).subscribe(
      data=>{
        this.pers= data; 
        console.log(data);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }

  onUpdate(value: any): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.pService.updatePersona(id, this.pers).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }
}
