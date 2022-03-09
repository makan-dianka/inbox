// import { CommonData } from './../@application/business/data/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { WritingMessageComponent } from './writing-message/writing-message.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { NbActionsModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { MessagingDetailsComponent } from './messaging-details/messaging-details.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    InboxComponent,
    NotificationComponent,
    WritingMessageComponent,
    MessageComponent,
    NotificationComponent,
    MessagingDetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbLayoutModule,
    NbActionsModule,
    NbLayoutModule,
    NbCardModule,
    RouterModule
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