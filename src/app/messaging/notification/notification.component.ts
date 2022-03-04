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
  }
}