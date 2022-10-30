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
  items = this.educacionData.getEducacion();

  educacionForm = this.formBuilder.group({
    titulo: "",
    establecimiento: "",
    inicio: "",
    fin: "",
    logo: "",
    descripcion:  "",
  });

  titulo: string = "";
  establecimiento: string = "";
  inicio: string = "";
  fin: string = "";
  logo: string = "";
  descripcion: string = "";
  educacion: educacion = new educacion("", "", "", "", "", "")
  constructor(private educacionData: PortfolioService, private ruta: Router, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const edu = new educacion(this.titulo, this.establecimiento, this.inicio, this.fin, this.logo, this.descripcion);
    this.educacionData.saveEducacion(edu).subscribe(
      data => {
        alert("Educacion añadida correctamente" + data);
        //this.ruta.navigate(['']);
      }, err => {
        alert("No se pudo añadir la educacion:" + err);
        //this.ruta.navigate(['']);
      }
    )
  } 

  onSubmitForm(value: any):void{
    console.log(value);
    }
}
