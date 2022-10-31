import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewComponent } from './components/educacion/new/new.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import { EditexpComponent } from './components/experiencia/editexp/editexp.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { EditarComponent } from './components/acerca-de/editar/editar.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'newedu', component: NewComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'editexp/:id', component: EditexpComponent},
  {path: 'editpro/:id', component: EditproyectoComponent},
  {path: 'editar/:id', component: EditarComponent},
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})
export class AppRoutingModule { }
