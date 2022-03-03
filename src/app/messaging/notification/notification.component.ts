import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-message.service';
import { map, repeat } from 'rxjs/operators'
@Component({
  selector: 'app-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notReadMessages!: number;

  constructor(
    private service: DataMessagesService
  ) { }

  ngOnInit(): void {
  //   this.service
  //   .getObservableMessages()
  //   .pipe(
  //     map((msg, idx)=>{ return msg.filter((m)=>{
  //         return !m.isRead
  //       }).length
  //     })
  //   )
  //   .subscribe( datas => this.notReadMessages = datas)
  // }

  // this.service
  // .getUnReadMessageAsObservable()
  // .subscribe(unRedMessages => this.notReadMessages = unRedMessages.length)
  // repeat()
  // }

  this.service
  .getCountOfUnReadMessages()
  .subscribe(n => this.notReadMessages = n)
  }

  count() {
    return this.notReadMessages
  }
}