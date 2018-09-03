import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: IProduit[];

  constructor(private _service: ProduitService) { }

  ngOnInit() {
    this.lesProduits();
  }

  lesProduits(): void {

    this._service.lesCategories().subscribe(cats => this.produits = cats);
  }

}
