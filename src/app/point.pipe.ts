import { Pipe, type PipeTransform } from "@angular/core";
@Pipe({
 name: "point",
})
export class PointPipe implements PipeTransform {
 transform(value: string): string {

  return value
   .split(" ")
   .map((char) => char + "!")
   .join("");
 }
}