import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorie } from '../domain/icategorie';
import { IProduit } from '../domain/iproduit';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  URL = 'http://localhost:8080/categories';

  constructor(private _http: HttpClient) { }

  lesCategories(): Observable<ICategorie[]> {

    return this._http.get<ICategorie[]>(this.URL);
  }

  lesProduits(): Observable<IProduit[]> {

    return this._http.get<IProduit[]>(this.URL);
  }

  lesProduitsParCategorie(idCategorie: string): Observable<IProduit[]> {

    return this._http.get<IProduit[]>(this.URL + '/' + idCategorie);
  }
}
