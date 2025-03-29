import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor, NgIf } from '@angular/common';
import { CardsService } from './cadrs.service';
import { cource } from './cadrs.service';
@Component({
  selector: 'app-home',
  imports: [CardComponent, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  cards: Array <cource> = [] 
  constructor (private cardsService: CardsService)  {}
  ngOnInit(): void {
  this.cards = this.cardsService.getData()
  }

}
