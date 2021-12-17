import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Producto, Tallas } from '../../model/product.model';
import { Observable } from 'rxjs';


import { Firestore, docData, doc, } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';



SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  thumbsSwiper: any;

  id: string | null | undefined;
  item$!: Observable<any>;
  tallas!: Tallas;
  
  constructor(firestore: Firestore,
              private router: ActivatedRoute,) {
                
      this.id = this.router.snapshot.paramMap.get('id');
      const collections = doc(firestore, `productos/${this.id}`);
      this.item$ = docData(collections);   
      this.item$.subscribe(data=>{
        this.tallas = data.tallas
      })
   }

  ngOnInit(): void {
  }

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
