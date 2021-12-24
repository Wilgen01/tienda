import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { Pedido } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private car: Pedido[] = [];
  flag = new BehaviorSubject<any>(null)
  flag$ = this.flag.asObservable()
  carItems: number = 0;
  pedido : any[] = []
  orderData : any[] = []
  constructor() {
    this.car = this.cargarCar();
    this.getCarItems();
    //this.mercadopago();
  }

  mercadopago() {
    this.pedido = JSON.parse(localStorage.getItem('data')!)
    for(let item of this.pedido){
      this.orderData = [
        ... this.orderData, 
        {
          title: item.articulo,
          quantity: item.cantidad,
          unit_price: item.precio, 
        }
      ]
    }

    console.log(this.orderData);
    
    // const orderData = [
    //   { "quantity": 1, "description": "Some book", "unit_price": 10000 },
    //   { "quantity": 1, "description": "Some book", "unit_price": 20000 }
    // ]

    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.orderData),
    }).then(function (response) {
      return response.json();
    }).then(res => {
      console.log(res);

    })
  }

  addToCar(pedido: Pedido) {
    const pedidoTemp = {
      ...pedido
    }
    Swal.fire({
      title: 'Agregando Producto',
      text: 'agregando producto al carrito, por favor espere',
      icon: 'info'
    })
    Swal.showLoading()
    if (this.car.length === 0) {
      this.car.push(pedidoTemp)
      this.guardarStorage('data', this.car)
    } else {
      const item = this.car.find(result => {
        return (result.articulo === pedido.articulo && result.talla === pedido.talla)
      })
      if (item !== undefined) {
        item.cantidad = item.cantidad + pedidoTemp.cantidad
        this.guardarStorage('data', this.car)
      } else {
        this.car.push(pedido)
        this.guardarStorage('data', this.car)

      }
      this.getCarItems();
    }
  }

  cargarCar(): Pedido[] {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data')!)
    } else {
      return [];
    }
  }

  guardarStorage(nombre: string, data: Pedido[]) {
    localStorage.setItem(nombre, JSON.stringify(data));
    Swal.fire({
      title: 'Producto Agregado',
      text: 'Producto agregado al carrito exitosamente',
      icon: 'success'
    })
  }

  getCarItems() {
    this.carItems = 0;
    for (const item of this.car) {
      this.carItems += item.cantidad
    }
    return this.carItems
  }

  actualizarCarrito(pedido: Pedido[]) {
    this.car = pedido
    console.log(this.car);
  }



}
