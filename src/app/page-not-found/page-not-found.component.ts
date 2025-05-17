import {
 CurrencyPipe,
 DatePipe,
 DecimalPipe,
 LowerCasePipe,
 PercentPipe,
 SlicePipe,
 UpperCasePipe,
} from "@angular/common";
import { Component } from "@angular/core";
import { PointPipe } from "../point.pipe";

@Component({
 selector: "app-page-not-found-component",
 imports: [
  CurrencyPipe,
  DatePipe,
  PercentPipe,
  UpperCasePipe,
  LowerCasePipe,
  DecimalPipe,
  SlicePipe,
  PointPipe
 ],
 templateUrl: "./page-not-found.component.html",
 styleUrl: "./page-not-found.component.scss",
})



export class PageNotFoundComponent {
 currency = 4357.5757;
 percent = 5.67;
 uppercase = "тестовый текст верхний регистр";
 lowercase = "ТЕСТОВЫЙ ТЕКСТ НИЖНИЙ РЕГИСТР";
 date = "2025-05-16";
 num = 3.1415965359;
 strToSlice = "abcdefghij";
 space = "прив кд чд";
}