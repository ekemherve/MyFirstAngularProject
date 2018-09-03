import { Component, OnInit } from '@angular/core';
import { ICategorie } from '../domain/icategorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {


  categories: ICategorie[];

  constructor(private _service: CategorieService) { }

  ngOnInit() {
    this.lescategories();
  }

  lescategories(): void {

    this._service.lesCategories().subscribe(cats => this.categories = cats);
  }

}
