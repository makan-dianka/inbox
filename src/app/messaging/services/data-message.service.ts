import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataMessagesService {


  constructor(private http: HttpClient) {
   }


   // page d'authentication
   auth(userData: any) {
     return this.http.post("http://localhost:4445/login", userData, {responseType: 'text', observe: 'response'} )
   }

   // l'envoie de requete vers le backend pour recuperer les messages
   getMessages(): Observable<any[]> {
     let token = localStorage.getItem('autorization');
     return this.http.get<any[]>('http://127.0.0.1:4445/messages')
   }

   // suppression
   delete(id: number){
    return this.http.delete<any>(`http://localhost:4444/message/del/${id}`)
  }

  // ajout de new msg
  newMessage(newMsg: any): Observable<any>{
    return this.http.post<any>('http://localhost:4444/message/new', newMsg)
  }

  // update message
  public updateMessage(updateMsg: any): Observable<any>{
    const url = `http://localhost:4444/message/${updateMsg.id}`
    return this.http.put<any>(url, updateMsg).pipe()
  }

}