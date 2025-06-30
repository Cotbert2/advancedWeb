import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from "../shared/modal/modal.component";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, ModalComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  showModal : boolean = false;

  handleModal() {
    this.showModal = !this.showModal;
  }
}
