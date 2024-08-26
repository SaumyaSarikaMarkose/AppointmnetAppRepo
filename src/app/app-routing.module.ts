import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupDetailComponent } from './components/signup-detail/signup-detail.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path:'detail', component:SignupDetailComponent},
  { path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  { path:'overview', component:OverviewComponent,canActivate: [AuthGuard]},
  { path:'appointment-details', component:AppointmentsComponent,canActivate: [AuthGuard]},
  { path:'signup-detail', component:SignupDetailComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
