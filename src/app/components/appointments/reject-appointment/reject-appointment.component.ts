import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reject-appointment',
  templateUrl: './reject-appointment.component.html',
  styleUrls: ['./reject-appointment.component.css']
})
export class RejectAppointmentComponent implements OnInit{

  
  reason: string = ''; 

  constructor(public dialogRef: MatDialogRef<RejectAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    
  }

  onClose(): void {
    this.dialogRef.close();
  }


  onSubmit(): void {
    console.log("Reason:", this.reason);
    console.log("Other Data:", this.data);
    
    // Handle the reason along with other data as needed
    const submissionData = {
      ...this.data,
      reason: this.reason
    };
    console.log("Submission Data:", submissionData);

    this.dialogRef.close(submissionData);
  }


}
