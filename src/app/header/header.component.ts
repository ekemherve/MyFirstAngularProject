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
    this._pService.currentPanierContent.subscribe(message => this.taillePanier = message.length);
    console.log('>>>>>>>>>' + this.taillePanier);
  }
}
