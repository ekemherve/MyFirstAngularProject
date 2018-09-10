import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  taillePanier: number;


  constructor(private _pService: PanierService) { }

  ngOnInit() {
    // this.taillePanier = this._pService.panier.length;
    this._pService.currentPanierQuantite.subscribe(panierQuantite => this.taillePanier = panierQuantite);
    // this._pService.currentPanierContent.subscribe(panier => this.taillePanier = panier);
    // console.log('>>>>>>>>>' + this.taillePanier);
  }
}
