import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


 
  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://fgsjc.herokuapp.com/temas', this.token)
  }

  getTemaById(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://fgsjc.herokuapp.com/temas/${id}`,this.token )
  }

  postTema(temaCadastro: Tema): Observable<Tema> { // sempre observar seu swagger e conferir a sintaxe do seu códgio para não ter falhas
    return this.http.post<Tema>('https://fgsjc.herokuapp.com/temas', temaCadastro, this.token)
    
  }

  putTema(temaCadastro: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://fgsjc.herokuapp.com/temas',temaCadastro, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://fgsjc.herokuapp.com/temas/${id}`, this.token)
  }



}