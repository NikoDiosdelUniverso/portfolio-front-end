import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioService } from './services/portfolio.service';
import { NewComponent } from './components/educacion/new/new.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { EditarComponent } from './components/acerca-de/editar/editar.component';
import { NewexpComponent } from './components/experiencia/newexp/newexp.component';
import { EditexpComponent } from './components/experiencia/editexp/editexp.component';
import { NewhabComponent } from './components/habilidades/newhab/newhab.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
    NewComponent,
    EditeducacionComponent,
    EditarComponent,
    NewexpComponent,
    EditexpComponent,
    NewhabComponent,
    NewproyectoComponent,
    EditproyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
