import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EchangesComponent } from './echanges/echanges.component';
import { ProjetsComponent } from './projets/projets.component';
import { MessagingModule } from '../messaging/messaging.module';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EchangesComponent,
    ProjetsComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    MessagingModule
  ],
  exports: [
    DashboardComponent,
    EchangesComponent,
    ProjetsComponent,
    FormulaireComponent
  ]
})
export class PagesModule { }