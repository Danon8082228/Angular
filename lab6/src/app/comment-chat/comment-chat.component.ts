import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comment-chat',
  standalone: true, // Делаем компонент независимым
  imports: [CommonModule, FormsModule], // Импортируем FormsModule
  templateUrl: './comment-chat.component.html',
  styleUrls: ['./comment-chat.component.scss']
})
export class CommentChatComponent {
  comments: { author: string, text: string }[] = [];
  newComment: string = '';

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push({ author: "Аноним", text: this.newComment });
      this.newComment = '';
    }
  }


  ngOnInit(): void {//компонент появился на странице
    console.log("ngOnInit: Компонент инициализирован");
  }

  ngOnChanges(changes: SimpleChanges): void {//когда меняются @input
    console.log("ngOnChanges: Изменения входных данных", changes);
  }



  ngDoCheck(): void {//обновляется переменная комент
    console.log("ngDoCheck: Проверка изменений в компоненте");
  }

  ngAfterContentInit(): void {//
    console.log("ngAfterContentInit: Контент вставлен");
  }

  ngAfterContentChecked(): void {//Вызывается когда нажимается кнопка
    console.log("ngAfterContentChecked: Контент проверен");
  }


  ngAfterViewInit(): void {//Вызывается когда загружен html
    console.log("ngAfterViewInit: DOM инициализирован"); 
  }

  ngAfterViewChecked(): void {//Вызывается когда обновляется html
    console.log("ngAfterViewChecked: DOM проверен");
  }

}

