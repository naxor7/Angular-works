import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatTopBarComponent } from './chat-top-bar/chat-top-bar.component';
import { ChatTypeBarComponent } from './chat-type-bar/chat-type-bar.component';
import { ChatMessageWindowComponent } from './chat-message-window/chat-message-window.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChatWindowComponent,
    ChatTopBarComponent,
    ChatTypeBarComponent,
    ChatMessageWindowComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
