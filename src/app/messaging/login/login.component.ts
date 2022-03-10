import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { DataMessagesService } from '../services/data-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  incorrect: string = ""
  valide: string = ""
  constructor(private service: DataMessagesService) { }

  ngOnInit(): void {
    
  }

  loginForm(userData: any) {
    this.service.auth(userData).subscribe( (response: any)=>{
      if (response.body == "username or password incorrect") {this.valide = response.body}
      else {this.incorrect = "Vous êtes authentifié !"}
      console.log("TOKEN:  ", response.body)
      localStorage.setItem("autorization", "Bear "+response.body)
    })
  }
}
