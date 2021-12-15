import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule, 
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
