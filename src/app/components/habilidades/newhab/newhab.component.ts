import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidades } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-newhab',
  templateUrl: './newhab.component.html',
  styleUrls: ['./newhab.component.css']
})
export class NewhabComponent implements OnInit {
  nombre: string = "";
  logo: string = "";

  constructor(private pService: PortfolioService, private ruta: Router) { }

  ngOnInit(): void {
  }
 
  onSubmit(value: any): void {
    console.log(value);
    const hab = new habilidades(this.nombre, this.logo);
    this.pService.saveSkill(hab).subscribe(
      data => {
        alert("Educacion añadida correctamente" + data);
        this.ruta.navigate(['']);
        window.location.reload();
      }, err => {
        //alert("No se pudo añadir la educacion:" + err);
        this.ruta.navigate(['']);
        window.location.reload();
      }
    )
  }
}
