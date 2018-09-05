import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  panier: IProduit[] = [];


  private messageSource =  new BehaviorSubject<IProduit[]>(this.panier);

  currentPanierContent = this.messageSource.asObservable();


  constructor() { }

  addToPanier(produit: IProduit): void {

    console.log('Produit ajouté');
    this.panier.push(produit);
    this.messageSource.next(this.panier);    // Firing some changes
    console.log(this.panier.length);
  }
}
