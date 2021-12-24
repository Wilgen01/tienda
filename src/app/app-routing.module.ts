import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { PagosComponent } from './pagos/pagos.component';


const routes: Routes = [
  { path: 'home', pathMatch: 'full', redirectTo: 'home' },
  { path: 'pagos', component: PagosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
