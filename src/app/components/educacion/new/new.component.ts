import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { educacion } from 'src/app/model/persona.model';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  titulo: string = "";
  establecimiento: string = "";
  inicio: string = "";
  fin: string = "";
  logo: string = "";
  descripcion: string = "";
  
  constructor(private educacionData: PortfolioService, private ruta: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log(value);
    const edu = new educacion(this.titulo, this.establecimiento, this.inicio, this.fin, this.logo, this.descripcion);
    this.educacionData.saveEducacion(edu).subscribe(
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
