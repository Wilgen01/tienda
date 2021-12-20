import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Producto, Tallas } from '../../model/product.model';
import { Observable } from 'rxjs';


import { Firestore, docData, doc, } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';



SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  thumbsSwiper: any;
  defaultImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221%22%20height%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201%201%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b808435dd%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b808435dd%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22-10.625%22%20y%3D%2227%22%3E1x1%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'


  id: string | null | undefined;
  item$!: Observable<any>;
  tallas!: Tallas;
  cargando : boolean = true 
  producto!: Producto
  forma: FormGroup = new FormGroup({}); 
  carritoItems:number = 0;
  
  constructor(firestore: Firestore,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private carritoService : CarritoService) {
      
      this.crearForma()
      window.scroll(0,0)
      this.id = this.router.snapshot.paramMap.get('id');
      const collections = doc(firestore, `productos/${this.id}`);
      this.item$ = docData(collections);   
      this.item$.subscribe(data=>{
        this.tallas = data.tallas
        this.producto = data
        this.cargando = false 
      })
   }

  ngOnInit(): void {
  }

  crearForma(){
    this.forma = this.fb.group({
      articulo: [this.id],
      talla: [, Validators.required],
      cantidad: [, [Validators.required, Validators.min(1)]]
    })
  }

  guardar(){
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control=>{

        if (control instanceof FormGroup ) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        }
        control.markAsTouched();
    
      })
    }else{
      this.forma.value.articulo = this.id
      this.forma.value.url = this.producto.image[0].url
      if(this.producto.descuento){
        this.forma.value.precio = this.producto.precioDesscuento
      }else{
        this.forma.value.precio = this.producto.precio
      }      
      this.carritoService.addToCar(this.forma.value)
      this.carritoItems = this.carritoService.getCarItems();    
      this.carritoService.flag.next(true)

    }
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
