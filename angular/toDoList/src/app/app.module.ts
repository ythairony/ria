import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListaComponent } from './views/lista/lista.component';
import { GradeComponent } from './views/grade/grade.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { PesquisarComponent } from './shared/pesquisar/pesquisar.component';
import { TabelaComponent } from './shared/tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    GradeComponent,
    CalendarioComponent,
    PesquisarComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
