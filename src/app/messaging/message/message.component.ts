import { MessageType } from './../inbox/inbox.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() {

  }

  messages!: MessageType;

  //on envoie message au travers la propriété data
  //on injecte la valeur de message dans le component message au moment de la création du component
  @Input('data') message!: MessageType;

  // l'objet EventEmitter est utiliser pour envoyer un evênement
  // remove : nom donné à l'évênement relié à la propriété deleteEvent
  @Output('remove') deleteEvent = new EventEmitter<MessageType>();



  ngOnInit(): void {
  }

  /**
   * cette méthode va utiliser l'objet EventEmitter pour émettre un evênement
   * (qui va transmettre le message qu'il y a dans le component)
   */
  delete(): void{
    this.deleteEvent.emit(this.message);
  }

}

