import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorie } from '../domain/icategorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  URL = 'http://localhost:8080/categories';

  constructor(private _http: HttpClient) { }

  lesCategories(): Observable<ICategorie[]> {

    return this._http.get<ICategorie[]>(this.URL);
  }

  getCategorieById(id: string): Observable<ICategorie> {

    return this._http.get<ICategorie>(this.URL + '/' + id);
  }
}
