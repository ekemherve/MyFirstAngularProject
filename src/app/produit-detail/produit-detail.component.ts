import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {


  produit: IProduit;
  idProduit: string;

  constructor(private _service: ProduitService, private _panier: PanierService, private _route: ActivatedRoute, private _router: Router) {

    this._route.paramMap.subscribe(res => {
      this.idProduit = res.get('id');
      console.log('>>>>>>>>>>>'  + this.idProduit);
      this._service.leProduitParId(this.idProduit).subscribe(prod => this.produit = prod);
    });
  }

  ngOnInit() {

  }

  addToPanier(produit: IProduit): void {
    this._panier.addToPanier(produit);
  }


}
