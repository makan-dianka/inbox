// import { CommonData } from './../@application/business/data/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { WritingMessageComponent } from './writing-message/writing-message.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { NbActionsModule, NbCardModule, NbLayoutModule } from '@nebular/theme';



@NgModule({
  declarations: [
    InboxComponent,
    NotificationComponent,
    WritingMessageComponent,
    MessageComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbLayoutModule,
    NbActionsModule,
    NbLayoutModule,
    NbCardModule
  ],
  exports: [
    InboxComponent,
    NotificationComponent,
    WritingMessageComponent,
    MessageComponent,
    NotificationComponent
  ]
})
export class MessagingModule { }