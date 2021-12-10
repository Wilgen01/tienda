import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/product.model';

//Swiper
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from "swiper";

//Firebase
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

SwiperCore.use([Pagination]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item$: Observable<any[]>;
  productos !: Producto[]
  constructor(firestore: Firestore) {
    const collections = collection(firestore, 'productos');
    this.item$ = collectionData(collections);
    this.item$.subscribe((data)=>{
         this.productos = data
    })
    
  }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 3,
    pagination: { clickable: true },
  };

  recomendados: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      550: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2.5,
      },
      900:{
        slidesPerView: 4.5
      }
    }
  };

}
