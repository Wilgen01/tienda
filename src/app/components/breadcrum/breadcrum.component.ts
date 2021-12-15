import { Component, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent implements OnInit {
  titulo : string = '';
  ruta : string [] = []
  public tituloSubs$: Subscription = new Subscription;
  constructor(private router: Router) { 
    this.tituloSubs$ = this.getParametros().subscribe(({titulo})=>{
      this.titulo = titulo
      document.title = `Tienda  |  ${titulo}`        
    })
  }

  ngOnInit(): void {
  }

  getParametros(){
    this.router.events.pipe(
      filter(resp =>resp instanceof NavigationEnd),
    ).subscribe((resp: any) =>{
      this.ruta = resp.url.split('/').splice(2)
    })
    return this.router.events
    .pipe(
      filter(resp =>resp instanceof ActivationEnd && resp.snapshot.firstChild === null),
      map((resp: any) =>resp.snapshot.data)
    )
  }

}
