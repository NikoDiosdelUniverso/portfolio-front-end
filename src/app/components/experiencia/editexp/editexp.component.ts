import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editexp',
  templateUrl: './editexp.component.html',
  styleUrls: ['./editexp.component.css']
})
export class EditexpComponent implements OnInit {
exp: experiencia;
  constructor(
    private pService: PortfolioService,
    private activatedRouter: ActivatedRoute,
    private ruta: Router
  ) { }

  ngOnInit(): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.pService.detailExp(id).subscribe(
      data=>{
        this.exp= data; 
        console.log(data);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }

  onUpdate(value: any): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.pService.updateExp(id, this.exp).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.ruta.navigate(['']);
      }
    )
  }

}
