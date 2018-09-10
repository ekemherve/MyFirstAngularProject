import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  panier: IProduit[] = [];

  private totalQuantite = 0;

  private quantiteSource =  new BehaviorSubject<number>(this.totalQuantite);
  private panierSource =  new BehaviorSubject<IProduit[]>(this.panier);

  currentPanier = this.panierSource.asObservable();
  currentPanierQuantite = this.quantiteSource.asObservable();


  constructor() { }

  getExistingProduit(produit: IProduit) {
    return this.panier.find(p => p.id === produit.id);
  }

  addProduit(produit: IProduit): void {
    this.panier.push(produit);
  }

  /*add(produit: IProduit) {
    this.panier.push(produit);
    ++this.totalQuantite;
    this.panierSource.next(this.panier);
    this.quantiteSource.next(this.totalQuantite);
  }*/

  addToPanier(produit: IProduit) {

    const existingProduit = this.getExistingProduit(produit);
    if (existingProduit === undefined) {
      // console.log('-----------------------' + existingProduit);
      produit.quantite = 1;
      this.addProduit(produit);
    } else {
      // console.log('*******' + produit.quantite);
      existingProduit.quantite += 1;
    }

    // console.log(this.panier);
  }

  updatePanier(produit: IProduit): void {

    this.addToPanier(produit);
    ++this.totalQuantite;
    this.quantiteSource.next(this.totalQuantite);
    this.panierSource.next(this.panier);
  }

  next() {
    this.panierSource.next(this.panier);
    this.quantiteSource.next(this.getTotalQuantity());
  }

  getTotalQuantity() {
    this.totalQuantite = 0;
    this.panier.forEach(element => {
      this.totalQuantite += element.quantite;
    });
    return this.totalQuantite;
  }

  delete(produit: IProduit) {

    const indexOfExistingproduit = this.panier.indexOf(produit);
    // console.log('---------- ' + indexOfExistingproduit);
    this.panier.splice(indexOfExistingproduit, 1);
  }
}
