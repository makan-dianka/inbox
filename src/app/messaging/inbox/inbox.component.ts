import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-message.service';

export interface MessageType {
  title: string;
  content: string;
  sent?: Date; // ? : propriété facultative
  isRead?: boolean;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {


  title: string = 'TITRE';
  messages: MessageType[] = [];


  //injection de dépendances, parametrages des injections...
  constructor(
    private myService: DataMessagesService
  ) { }

  ngOnInit(): void {
    this.myService.getObservableMessages().subscribe((datas)=>{
      this.messages = datas
    })

  }


  delete(message: MessageType){
    this.messages.splice(this.messages.indexOf(message),1);
  }
}
