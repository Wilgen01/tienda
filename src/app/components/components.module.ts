import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';



@NgModule({
  declarations: [CardComponent, BreadcrumComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    BreadcrumComponent
  ]
})
export class ComponentsModule { }
