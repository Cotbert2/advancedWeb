import { Component } from '@angular/core';
import { CarCardComponent } from "./car-card/car-card.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-pannel',
  imports: [CarCardComponent, CommonModule],
  templateUrl: './car-pannel.component.html',
  styleUrl: './car-pannel.component.scss'
})
export class CarPannelComponent {

  currentCar : any;

  cars = [
    {
      name: 'Toyota Corolla',
      image: 'https://www.ambacar.ec/wp-content/uploads/2022/10/ambacar-noticias-ahorro-1024x554.jpg',
      description: 'A reliable and fuel-efficient compact car.',
      price: 20000
    },
    {
      name: 'Honda Civic',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mMqcRYCJDeEBVysy-BNQ07cXezqh7bf-LQ&s',
      description: 'A sporty compact car with great handling.',
      price: 22000
    },
    {
      name: 'Ford Focus',
      image: 'https://www.ambacar.ec/wp-content/uploads/2022/10/ambacar-noticias-ahorro-1024x554.jpg',
      description: 'A versatile compact car with advanced technology features.',
      price: 21000
    },
    {
      name: 'Chevrolet Malibu',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9Mihfh2rdUhRwj_FHQP4BCqgY-z6Ab_ePA&s ',
      description: 'A midsize sedan with a comfortable interior and smooth ride.',
      price: 24000
    },
    {
      name: 'Nissan Altima',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQuh4tNyDRN02hqMmp-ACHO_P3bG9zl8z5A&s',
      description: 'A stylish midsize sedan with a spacious cabin.',
      price: 23000
    }
  ]

  constructor() {
    this.currentCar = this.cars[0];
  }

  selectCar(carIndex : number): void {
    this.currentCar = this.cars[carIndex];
  }

  

}
