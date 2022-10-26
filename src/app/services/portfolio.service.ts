import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {educacion, experiencia, habilidades, persona, proyectos} from 'src/app/model/persona.model';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url  = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.url+"/persona/ver");
  }
  public getEducacion(): Observable<educacion>{
    return this.http.get<educacion>(this.url+"/edu/ver");
  }
  public getExperiencia(): Observable<experiencia>{
    return this.http.get<experiencia>(this.url+"/exp/ver");
  }
  public getHabilidades(): Observable<habilidades>{
    return this.http.get<habilidades>(this.url+"/skills/ver");
  }
  public getProyectos(): Observable<proyectos>{
    return this.http.get<proyectos>(this.url+"/pro/ver");
  }
}
