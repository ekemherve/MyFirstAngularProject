import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';
import { CategorieComponent } from './categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    HeaderComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
