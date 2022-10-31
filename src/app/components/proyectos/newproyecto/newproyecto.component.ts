import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectos } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string = "";
  imagen: string = "";
  linkSitio: string = "";
  linkCodigo: string = "";
  descripcion: string = "";
  constructor(private pService: PortfolioService, private ruta: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log(value);
    const pro = new proyectos(this.nombre, this.imagen, this.linkSitio, this.linkCodigo, this.descripcion);
    this.pService.saveProyecto(pro).subscribe(
      data => {
        alert("Proyecto añadida correctamente" + data);
        this.ruta.navigate(['']);
        window.location.reload();
      }, err => {
        //alert("No se pudo añadir el proyecto:" + err);
        this.ruta.navigate(['']);
        window.location.reload();
      }
    )
  } 
}
 