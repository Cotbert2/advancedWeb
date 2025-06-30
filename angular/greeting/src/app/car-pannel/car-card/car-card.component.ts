import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
  @Input() carName : string = 'Default Car Name';
  @Input() carImage : string = 'https://via.placeholder.com/150';
  @Input() carDescription : string = 'Default Car Description';
  @Input() carPrice : number = 0;


  constructor() { }
}
