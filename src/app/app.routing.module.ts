import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EchangesComponent } from './pages/echanges/echanges.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { MessagingDetailsComponent } from './messaging/messaging-details/messaging-details.component';
import { LoginComponent } from './messaging/login/login.component';

@NgModule({
  imports : [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent},
      { path: 'message/:id', component: MessagingDetailsComponent},
      { path: 'echanges', component: EchangesComponent},
      { path: 'projets', component: ProjetsComponent},
      { path: 'formulaire', component: FormulaireComponent},
      { path: 'login', component: LoginComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule{

}
