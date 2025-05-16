import { Component } from '@angular/core';
import { CommentChatComponent } from '../comment-chat/comment-chat.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommentChatComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

}
