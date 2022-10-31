import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyectos } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  pro: proyectos;

  constructor(  private pService: PortfolioService,
    private activatedRouter: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.pService.detailPro(id).subscribe(
      data=>{
        this.pro= data; 
        console.log(data);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }

  onUpdate(value: any): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.pService.updateProyecto(id, this.pro).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }
}
 