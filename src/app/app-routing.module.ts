import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BornesComponent } from './bornes/bornes.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guards';
import { BorneEditComponent } from './bornes/borne-edit/borne-edit.component';
import { GroupesComponent } from './groupes/groupes.component';
import { ConsommationsComponent } from './consommations/consommations.component';

const routes: Routes = [
   {path: '', redirectTo: 'landing', pathMatch: 'full'},
   {path: 'landing', component: LoginComponent},
   {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
   {path: 'bornes', component:BornesComponent, canActivate: [AuthGuard]},
   {path: 'bornes/:id', component:BorneEditComponent, canActivate: [AuthGuard]},
   {path: 'searchBornes', component:BornesComponent, canActivate: [AuthGuard]},
   {path: 'searchBornes/:searchTerm', component:BornesComponent, canActivate: [AuthGuard]},
   {path: 'groupes', component:GroupesComponent, canActivate: [AuthGuard]},
   {path: 'consommations', component:ConsommationsComponent, canActivate: [AuthGuard]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
