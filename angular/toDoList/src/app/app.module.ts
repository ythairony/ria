import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListaComponent } from './views/lista/lista.component';
import { GradeComponent } from './views/grade/grade.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { PesquisarComponent } from './shared/pesquisar/pesquisar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    GradeComponent,
    CalendarioComponent,
    PesquisarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
