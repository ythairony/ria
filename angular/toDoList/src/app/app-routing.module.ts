import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './views/lista/lista.component';
import { GradeComponent } from './views/grade/grade.component';
import { CalendarioComponent } from './views/calendario/calendario.component';

const routes: Routes = [
  { path: "lista", component: ListaComponent },
  { path: "grade", component: GradeComponent },
  { path: "calendario", component: CalendarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
