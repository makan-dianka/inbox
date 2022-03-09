import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  title: string = 'TITRE';
  Messages: any;
  err!: string;

  constructor(
    private myService: DataMessagesService,
    private http: HttpClient, private router: Router
  ) { }

  ngOnInit(): void {
    this.Messages = this.myService.getMessages()
    .subscribe(Message => {
      this.Messages = Message
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log("ok!");
    })
  } 
}