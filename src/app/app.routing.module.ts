import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EchangesComponent } from './pages/echanges/echanges.component';
import { ProjetsComponent } from './pages/projets/projets.component';

@NgModule({
  imports : [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent},
      { path: 'echanges', component: EchangesComponent},
      { path: 'projets', component: ProjetsComponent},
      { path: 'formulaire', component: FormulaireComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule{

}
