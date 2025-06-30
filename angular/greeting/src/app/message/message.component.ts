import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() name: string = 'Pepito';

  changeName() : void {
    this.name = 'Juanito';
  }

  fetchCurrentTime(): void {
    const currentTime = new Date();
    this.name = `Current time is: ${currentTime.toLocaleTimeString()}`;
  }

  fetchTimeStamp() : void {
    const timeStamp = Date.now();
    this.name = `date is: ${new Date(timeStamp).toLocaleString()} (${timeStamp})`;
  }

}
