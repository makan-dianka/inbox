import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataMessagesService) { }

  ngOnInit(): void {
    
  }

  loginForm(userData: any) {
    this.service.auth(userData).subscribe( (DATA)=>{
      console.log(DATA)
    })
  }
}
