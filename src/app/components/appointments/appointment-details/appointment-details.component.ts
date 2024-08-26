import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppointmentRescheduleComponent } from '../appointment-reschedule/appointment-reschedule.component';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit{

  constructor( public dialogRef: MatDialogRef<AppointmentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  onClose(): void {
    this.dialogRef.close();
  }

  openReschedule(): void {
    this.onClose();
    const dialogRef = this.dialog.open(AppointmentRescheduleComponent, {
      width: '300px',
      data: this.data // pass the data to be edited
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Updated data:', result);
        // Handle the updated data, e.g., save it
      }
    });
  }

}
