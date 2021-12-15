import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


import { Producto } from '../../model/product.model';

//Firebase
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  item$: Observable<any[]>
  productos !: Producto[]


  
  constructor(firestore: Firestore,) {
    const collections = collection(firestore, 'productos');
    this.item$ = collectionData(collections);
    this.item$.subscribe((data)=>{
         this.productos = data
    })

   


  }

  ngOnInit(): void {
    window.scroll(0,0) 
  }

 

}
