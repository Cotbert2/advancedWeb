import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BootComponent } from "./components/boot/boot.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, BootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
  isBooting = signal(true);


  constructor() {
    setTimeout(() => {
      this.isBooting.set(false);
    }, 5000);
  }
}