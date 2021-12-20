import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Pedido } from '../../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  pedido : Pedido[] = [];
  precio : number = 0;


  constructor(private carritoService: CarritoService) { 
    this.pedido = carritoService.cargarCar()
    this.precioTotalPedido();
    carritoService.flag$.subscribe(data =>{
      if (data) {
        this.pedido = this.carritoService.cargarCar();
        this.precioTotalPedido();
      }
    })

  }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.pedido = this.carritoService.cargarCar();
    this.precioTotalPedido();
  }

  precioTotalPedido(){
    this.precio = 0
    for(const item of this.pedido){
      this.precio += item.precio*item.cantidad
    }
  }

  restarItem(i: number){
    if (this.pedido[i].cantidad>1) {
      this.pedido[i].cantidad = this.pedido[i].cantidad -1
      localStorage.setItem('data', JSON.stringify(this.pedido));
      this.precioTotalPedido();
    }
  }

  sumarItem(i : number){
    this.pedido[i].cantidad = this.pedido[i].cantidad +1
    localStorage.setItem('data', JSON.stringify(this.pedido));
    this.precioTotalPedido();
  }

  
  actualizarItem(i:number, valor : string){
    this.pedido[i].cantidad =parseInt(valor)
    localStorage.setItem('data', JSON.stringify(this.pedido));
    this.precioTotalPedido();
  }

}
