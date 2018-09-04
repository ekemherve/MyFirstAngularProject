import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HttpClientModule} from '@angular/common/http';
import { ProduitComponent } from './produit/produit.component';
import { RouterModule, Route} from '@angular/router';
import { PanierComponent } from './panier/panier.component';

const myRoutingTable: Route[] = [
  {path: '',  component: ProduitComponent},
  {path: 'produits',  component: ProduitComponent},
  {path: 'produits/:id',  component: ProduitComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    HeaderComponent,
    CategorieComponent,
    ProduitComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutingTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
