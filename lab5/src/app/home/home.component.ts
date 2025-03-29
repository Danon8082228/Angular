import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor, NgIf } from '@angular/common';

type cource={
  id:number
  picture:string
  title:string
  cardDiscription:string
}

@Component({
  selector: 'app-home',
  imports: [CardComponent, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards: Array<cource>=[
    {
      id:1,
      picture:"https://avatars.mds.yandex.net/i?id=d205bb49dff62fe25f0e7869bc3f7789_l-6474952-images-thumbs&n=13",
      title:"Курс 1",
      cardDiscription:"Описание курса"
    },

    {
      id:2,
      picture:"https://avatars.mds.yandex.net/i?id=c70ec0784dcef90e4c10052db0cbedd8_l-5236630-images-thumbs&n=13",
      title:"Курс 2",
      cardDiscription:"Описание курса"
    },

    {
      id:3,
      picture:"https://avatars.mds.yandex.net/i?id=fa31e1e450409639e205a329c1369195-5332431-images-thumbs&n=13",
      title:"Курс 3",
      cardDiscription:"Описание курса"
    }


  ]

}
