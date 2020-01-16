import { AdminpageComponent } from './pages/adminpage/adminpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IsConnectedGuard } from './core/is-connected.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate : [IsConnectedGuard]},
  {path: 'ADMINPAGE', component: AdminpageComponent, canActivate : [IsAdminGuard, IsConnectedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
