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
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { FormsModule} from '@angular/forms';

const myRoutingTable: Route[] = [
  {path: '',  component: ProduitComponent},
  {path: 'produits',  component: ProduitComponent},
  {path: 'produits/:titre',  component: ProduitComponent},
  {path: 'detail-produit/:id',  component: ProduitDetailComponent},
  {path: 'panier', component: PanierComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    HeaderComponent,
    CategorieComponent,
    ProduitComponent,
    PanierComponent,
    ProduitDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutingTable),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
