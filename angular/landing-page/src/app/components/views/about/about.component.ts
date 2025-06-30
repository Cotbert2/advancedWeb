import { Component, OnInit, Signal } from '@angular/core';
import { AboutItemComponent } from "./about-item/about-item.component";
import { IAbout } from '../../../interfaces/IAbout';
import { PersonalDataService } from '../../../services/personal-data.service';

@Component({
  selector: 'app-about',
  imports: [AboutItemComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(
    private personalDataService : PersonalDataService
  ){
    this.aboutItems = this.personalDataService.getPersonalDataSignal();
    console.log('data fetch:', this.aboutItems());
  }
  ngOnInit(): void {
  }

  aboutItems : Signal<IAbout[]> ;
}
