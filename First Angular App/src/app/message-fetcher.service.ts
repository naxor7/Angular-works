import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageFetcherService {

  private url = "http://localhost:3000/";
  messages: Message[] = [];

  constructor(private httpClient: HttpClient) { }

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(message: Message): void {
    this.messages.push(message);
    if (message.messageSide === "client") {
      this.getResponse(message);
    }
  }

  getResponse(message: Message): void {
    var responseMessage: Message = new Message();
    this.httpClient.post(this.url, message, { responseType: 'text' }).toPromise().then((response) => {
      responseMessage.messageSide = "server";
      responseMessage.messageText = response;
      this.addMessage(responseMessage);
    });
  }

}
