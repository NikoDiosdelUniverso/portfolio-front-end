import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  edu: educacion;

  constructor(
    private eduService: PortfolioService,
    private activatedRouter: ActivatedRoute,
    private ruta: Router
  ) { }

  ngOnInit(): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.eduService.detailEdu(id).subscribe(
      data=>{
        this.edu= data; 
        console.log(data);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }
 

  onUpdate(value: any): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.eduService.updateEducacion(id, this.edu).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }

}
