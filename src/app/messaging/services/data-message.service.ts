import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataMessagesService {

  // HEADERS = new HttpHeaders({
  //   'content-type' : 'application/json',
  // })

  constructor(private http: HttpClient) {
   }

   getMessages() {
     return this.http.get('http://127.0.0.1:4444/api')
   }
}