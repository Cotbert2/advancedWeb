import { Component, Input } from '@angular/core';
import { IAbout } from '../../../../models';

@Component({
  selector: 'app-about-item',
  imports: [],
  templateUrl: './about-item.component.html',
  styleUrl: './about-item.component.scss'
})
export class AboutItemComponent {
  @Input() info ?: IAbout;
  @Input() photoFirst : boolean = false;
}
