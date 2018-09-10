import { Component, OnInit, Input } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  produits: IProduit[];
  prixTotal = 0;

  constructor(private _pService: PanierService) { }

  ngOnInit() {
    // this.produits = this._pService.panier;
    this._pService.currentPanier.subscribe(p => { this.produits = p; this.setPrixTotal(); });

  }

  updatePanier() {

    this._pService.next();
    this.setPrixTotal();
  }

  setPrixTotal() {

    this.prixTotal = 0;
    this.produits.forEach(element => {
      this.prixTotal += element.prix * element.quantite;
    });
  }

  delete(produit: IProduit) {


    this._pService.delete(produit);
    this._pService.next();
  }

}
