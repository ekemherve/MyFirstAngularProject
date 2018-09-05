import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  panier: IProduit[] = [];

  constructor() { }

  addToPanier(produit: IProduit): void {

    console.log('Produit ajouté');
    this.panier.push(produit);
  }
}
