import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageFetcherService } from '../message-fetcher.service';

@Component({
  selector: 'app-chat-message-window',
  templateUrl: './chat-message-window.component.html',
  styleUrls: ['./chat-message-window.component.css']
})
export class ChatMessageWindowComponent implements OnInit {

  messages: Message[];

  constructor(private messageFetcher: MessageFetcherService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.messages = this.messageFetcher.getMessages();
  }


}
