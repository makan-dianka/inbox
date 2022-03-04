import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-message.service';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  title: string = 'TITRE';
  Messages: any;

  constructor(
    private myService: DataMessagesService
  ) { }

  ngOnInit(): void {
    this.Messages = this.myService.getMessages()
    .subscribe(Message => {
      this.Messages = Message
    })

    // console.log(this.Messages)
  }  

}
