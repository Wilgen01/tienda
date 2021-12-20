import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [CardComponent, BreadcrumComponent, WhatsappComponent],
  imports: [
    CommonModule, 
    RouterModule, 
    LazyLoadImageModule
  ],
  exports: [
    CardComponent,
    BreadcrumComponent,
    WhatsappComponent
  ]
})
export class ComponentsModule { }
