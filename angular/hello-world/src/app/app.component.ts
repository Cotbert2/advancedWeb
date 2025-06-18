import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from "./greeting/greeting.component";
import { FooterComponent } from "./footer/footer.component";
import { PresentationCardComponent } from "./presentation-card/presentation-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingComponent, FooterComponent, PresentationCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boring app';
}
