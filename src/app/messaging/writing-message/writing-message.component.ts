import { DataMessagesService } from './../services/data-message.service';
import { MessageType } from './../inbox/inbox.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-message',
  templateUrl: './writing-message.component.html',
  styleUrls: ['./writing-message.component.scss']
})
export class WritingMessageComponent implements OnInit {

  m: MessageType = {
    content: '',
    title: '',
    sent : new Date(),
    isRead: false
  };

  constructor(
    private service: DataMessagesService
  ) { }

  ngOnInit(): void {
    this.m =  {
      content: '',
      title: '',
      sent : new Date(),
      isRead: false
    }

  }

  addNewMessage(){
   console.log(this.m);
    this.service.createMessages(this.m);
  }
}