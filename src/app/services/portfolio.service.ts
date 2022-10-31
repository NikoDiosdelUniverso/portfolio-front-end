import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion, experiencia, habilidades, persona, proyectos } from 'src/app/model/persona.model';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService { 
  url = 'https://portfolio-abc.herokuapp.com'
  constructor(private http: HttpClient) { }

  public getPersonasList(): Observable<persona[]> {
    return this.http.get<persona[]>(this.url + "/persona/lista");
  }
  public getPersona(id: number): Observable<persona> {
    return this.http.get<persona>(this.url + `/persona/ver/${id}`);
  }
  public savePersona(persona: persona): Observable<any> {
    return this.http.post<any>(this.url + '/persona/new', persona);
  }
  public updatePersona(id: number, persona: persona): Observable<any> {
    return this.http.put<any>(this.url + `/persona/editar/${id}`, persona);
  }
  public deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/persona/delete/${id}`);
  }

  public getEducacion(): Observable<educacion[]> {
    return this.http.get<educacion[]>(this.url + "/edu/ver");
  }
  public detailEdu(id: number): Observable<educacion> {
    return this.http.get<educacion>(this.url + `/edu/detail/${id}`);
  }
  public saveEducacion(educacion: educacion): Observable<any> {
    return this.http.post<any>(this.url + '/edu/new', educacion);
  }
  public updateEducacion(id: number, educacion: educacion): Observable<any> {
    return this.http.put<any>(this.url + `/edu/editar/${id}`, educacion);
  }
  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/edu/delete/${id}`);
  }

  public getExperiencia(): Observable<experiencia[]> {
    return this.http.get<experiencia[]>(this.url + "/exp/ver");
  }

  public detailExp(id: number): Observable<experiencia> {
    return this.http.get<experiencia>(this.url + `/exp/detail/${id}`);
  }
  public saveExp(experiencia: experiencia): Observable<any> {
    return this.http.post<any>(this.url + '/exp/new', experiencia);
  }
  public updateExp(id: number, experiencia: experiencia): Observable<any> {
    return this.http.put<any>(this.url + `/exp/editar/${id}`, experiencia);
  }
  public deleteExp(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/exp/delete/${id}`);
  }

  public getHabilidades(): Observable<habilidades[]> {
    return this.http.get<habilidades[]>(this.url + "/skills/ver");
  }
  public detailHab(id: number): Observable<habilidades> {
    return this.http.get<habilidades>(this.url + `/skills/detail/${id}`);
  }
  public saveSkill(habilidades: habilidades): Observable<any> {
    return this.http.post<any>(this.url + '/skills/new', habilidades);
  }
  public updateSkill(id: number, habilidades: habilidades): Observable<any> {
    return this.http.put<any>(this.url + `/skills/editar/${id}`, habilidades);
  }
  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/skills/delete/${id}`);
  }

  public getProyectos(): Observable<proyectos[]> {
    return this.http.get<proyectos[]>(this.url + "/pro/ver");
  }
  public detailPro(id: number): Observable<proyectos> {
    return this.http.get<proyectos>(this.url + `/pro/detail/${id}`);
  }
  public saveProyecto(proyectos: proyectos): Observable<any> {
    return this.http.post<any>(this.url + '/pro/new', proyectos);
  }
  public updateProyecto(id: number, proyectos: proyectos): Observable<any> {
    return this.http.put<any>(this.url + `/pro/editar/${id}`, proyectos);
  }
  public deleteProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/pro/delete/${id}`);
  }
}
