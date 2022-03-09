import { DataMessagesService } from './../services/data-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-message',
  templateUrl: './writing-message.component.html',
  styleUrls: ['./writing-message.component.scss']
})
export class WritingMessageComponent implements OnInit {

  message: any
  success!: string

  constructor(
    private service: DataMessagesService
  ) { }

  ngOnInit(): void {
    this.message = {
      id: 0,
      title: '',
      content: '',
      sent: new Date(),
      isRead : false
    } 
  }

  // creation d'un nouveau message
  saveMessage() {
    this.success = "Message envoyé"
    this.service.newMessage(this.message).subscribe((msg)=>{})
    console.log(this.message)
  }
}