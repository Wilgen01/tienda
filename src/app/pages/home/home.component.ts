import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { clickable: true },
  };

  recomendados: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 10,
  };

}
