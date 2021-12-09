import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
