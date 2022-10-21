import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  URL_PETS = 'http://localhost:3000/pet';

  constructor(private http: HttpClient) { }

  listar(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.URL_PETS);
  }

  inserir(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.URL_PETS, pet);
  }

  deletar(id: string): Observable<Pet> {
    return this.http.delete<Pet>(`${this.URL_PETS}/${id}`);
  }

  obterPorId(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.URL_PETS}/${id}`);
  }
}
