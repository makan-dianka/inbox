import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { DataMessagesService } from '../services/data-message.service';

@Component({
  selector: 'app-messaging-details',
  templateUrl: './messaging-details.component.html',
  styleUrls: ['./messaging-details.component.scss']
})
export class MessagingDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private myService: DataMessagesService, private router: Router) { }

  message: any

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.myService.getMessages().subscribe(Messages => {
    this.message = Messages.find(msg => msg.id == id)
    })  
  }

  // btn de retour
  back() {
    this.router.navigate(['/echanges'])
  }

 public deleteMessage(): void {
   this.myService.delete(this.message.id).subscribe(()=>{this.router.navigate(["/echanges"])})
 }
}
