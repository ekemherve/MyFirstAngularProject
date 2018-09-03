import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduit } from '../domain/iproduit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  URL = 'http://localhost:8080/produits';

  constructor(private _http: HttpClient) { }

  lesCategories(): Observable<IProduit[]> {

    return this._http.get<IProduit[]>(this.URL);
  }
}
