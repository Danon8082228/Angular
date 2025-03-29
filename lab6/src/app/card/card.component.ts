import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() picture: string = "";
  @Input() title: string = "";
  @Input() CardDiscription: string = "";



}
