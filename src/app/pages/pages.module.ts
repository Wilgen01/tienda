import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    ProductsComponent,
    DescripcionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule, 
    RouterModule,
    SharedModule, 
    LazyLoadImageModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
