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
  defaultImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221%22%20height%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201%201%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b808435dd%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b808435dd%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22-10.625%22%20y%3D%2227%22%3E1x1%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
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
