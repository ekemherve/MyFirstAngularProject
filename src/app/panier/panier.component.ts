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

  constructor(private _pService: PanierService) { }

  ngOnInit() {

    this.produits = this._pService.panier;
  }

}
