import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AddbarComponent } from './shared/addbar/addbar.component';
import { ListaComponent } from './shared/lista/lista.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { TabelaComponent } from './shared/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AddbarComponent,
    ListaComponent,
    SobreComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
