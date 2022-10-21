import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../model/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  URL_USUARIOS = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URL_USUARIOS);
  }

  deletar(id: string): Observable<any>{
    return this.http.delete(`${this.URL_USUARIOS}/${id}`);
  }

  inserir(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  obterPorId(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }
}
