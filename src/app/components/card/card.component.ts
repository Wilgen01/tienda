import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../model/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() productos!: Producto; 
  constructor() {     
  }

  ngOnInit(): void {
  }

}
