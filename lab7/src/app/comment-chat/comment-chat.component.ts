import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-chat.component.html',
  styleUrls: ['./comment-chat.component.scss']
})
export class CommentChatComponent {
  comments: {
    author: string;
    age: number;
    email: string;
    gender: string;
    text: string;
  }[] = [];

  author = '';
  age: number | null = null;
  email = '';
  gender = '';
  text = '';

  addComment(form: NgForm) {
    if (form.valid) {
      this.comments.push({
        author: this.author.trim(),
        age: this.age!,
        email: this.email.trim(),
        gender: this.gender,
        text: this.text.trim()
      });

      form.resetForm();
    }
  }
}
