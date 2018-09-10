import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitService } from '../services/produit.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { ICategorie } from '../domain/icategorie';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: IProduit[];
  idCategorie: string;
  titre: string;
  subscription: Subscription;

  constructor(private _service: ProduitService, private _serviceCategorie: CategorieService, private _route: ActivatedRoute,
    private _router: Router, private _panier: PanierService) { }

  ngOnInit() {

    this._route.paramMap.subscribe(routeActive => {
                // this.idCategorie = routeActive.get('id');
                this.titre = routeActive.get('titre');
                this.choisitLaBonneMethode();
              });
  }

  updatePanier(produit: IProduit): void {
    // this._panier.add(produit);
    this._panier.updatePanier(produit);

  }

  lesProduits(): void {

    this._service.lesProduits().subscribe(cats => this.produits = cats);
  }

  lesProduitsParCategorie(): void {

    this._serviceCategorie.lesProduitsParCategorie(this.titre).subscribe(prd => this.produits = prd);
   // this._service.lesProduitsParCategorie(this.titre, this.idCategorie).subscribe(prd => this.produits = prd);
 }

  choisitLaBonneMethode() {
    if (this.titre == null) {
      this.lesProduits();
    } else {
      this.lesProduitsParCategorie();
    }
  }

}
