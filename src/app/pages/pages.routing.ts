import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [

    {
        path: 'home', 
        component: PagesComponent, 
        children: [
            { path: '', component: HomeComponent },
            { path: 'hombre', component: ProductsComponent, data: {titulo : 'hombre'} },
            { path: 'mujer', component: ProductsComponent, data: {titulo : 'mujer'} },
            // { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
      },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
