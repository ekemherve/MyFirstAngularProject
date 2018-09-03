import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitService } from '../services/produit.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { ICategorie } from '../domain/icategorie';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: IProduit[];
  urlActiveParCategorie: string;
  subscription: Subscription;
  // categorie: ICategorie = {id: 0, titre: '', produits: []};

  constructor(private _service: ProduitService, private _route: ActivatedRoute,
    private _router: Router, private _serviceCat: CategorieService) { }

  ngOnInit() {
      // this.lesProduits();
      /*this.subscription = this._route.paramMap.subscribe(res => {
        this.urlActiveParCategorie = res.get('id');
        this._serviceCat.getCategorieById(this.urlActiveParCategorie).subscribe(res2 => {this.categorie = res2; });
      });*/
    this._route.paramMap.subscribe(routeActive => {
                this.urlActiveParCategorie = routeActive.get('id');
                this.choisitLaBonneMethode();
              });
    /*console.log('>>>>>>>>>>>>>>>>>>>>' + this.urlActiveParCategorie);
    this.lesProduitsParCategorie(this.urlActiveParCategorie);*/
  }

  /*getActivatedRoute(): void {
    this.subscription = this._route.paramMap.subscribe( );
  }*/

  lesProduits(): void {

    this._service.lesProduits().subscribe(cats => this.produits = cats);
  }

  lesProduitsParCategorie(idCategorie: string): void {

    this._service.lesProduitsParCategorie(idCategorie).subscribe(prd => this.produits = prd);
  }

  choisitLaBonneMethode() {

    if (this.urlActiveParCategorie == null) {
      this.lesProduits();
    } else {
      this.lesProduitsParCategorie(this.urlActiveParCategorie);
    }
  }

}
