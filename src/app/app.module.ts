import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbActionsModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { MessagingModule } from './messaging/messaging.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MessagingModule,
    RoutingModule,
    PagesModule,
    NbLayoutModule,
    NbActionsModule,
    NbCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

