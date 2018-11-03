import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageFetcherService } from '../message-fetcher.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';



@Component({
  selector: 'app-chat-type-bar',
  templateUrl: './chat-type-bar.component.html',
  styleUrls: ['./chat-type-bar.component.css']
})
export class ChatTypeBarComponent implements OnInit {

  currentMessage: String;
  URL = 'http://localhost:3000/api/upload';

  public uploader: FileUploader = new FileUploader({url: this.URL, itemAlias: 'photo'});

  constructor(private messageService: MessageFetcherService) {
    this.currentMessage = "";    
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

  sendMessage(): void {
    this.currentMessage = this.currentMessage.trim();
    if (this.currentMessage !== undefined && this.currentMessage.length > 0) {
      var message: Message = new Message();;
      message.messageText = this.currentMessage;
      message.messageSide = "client";
      this.messageService.addMessage(message);
    }
    this.currentMessage = "";
  }

}
