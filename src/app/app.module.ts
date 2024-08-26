import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AddAppointmentsComponent } from './components/appointments/add-appointments/add-appointments.component';

import { ListAppointmentsComponent } from './components/appointments/list-appointments/list-appointments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppointmentDetailsComponent } from './components/appointments/appointment-details/appointment-details.component';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentRescheduleComponent } from './components/appointments/appointment-reschedule/appointment-reschedule.component';
import { TransferAppointmentsComponent } from './components/appointments/transfer-appointments/transfer-appointments.component';
import { LoginComponent } from './components/login/login.component'; 
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './components/signup/signup.component';
import { SignupDetailComponent } from './components/signup-detail/signup-detail.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CardComponent } from './shared/card/card.component';
import { RejectAppointmentComponent } from './components/appointments/reject-appointment/reject-appointment.component';  
import { DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AddAppointmentsComponent,
  
    ListAppointmentsComponent,
    AppointmentDetailsComponent,
    AppointmentRescheduleComponent,
    TransferAppointmentsComponent,
    LoginComponent,
    SignupComponent,
    SignupDetailComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    OverviewComponent,
    CardComponent,
    RejectAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,  
    MatFormFieldModule,  
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
