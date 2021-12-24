import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosComponent } from './pagos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports:[
    PagosComponent
  ]
})
export class PagosModule { }
