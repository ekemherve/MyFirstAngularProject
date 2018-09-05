import { Component, OnInit } from '@angular/core';
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

    this._pService.currentPanierContent.subscribe(products => {this.produits = products; this.totalPanier(); } );
  }


  totalPanier(): void {

    this.produits.forEach(element => {
      this.prixTotal += element.prix;
    });
  }
}
