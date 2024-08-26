import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-appointments',
  templateUrl: './transfer-appointments.component.html',
  styleUrls: ['./transfer-appointments.component.css']
})
export class TransferAppointmentsComponent implements OnInit{

  people: string[] = ['HR Reen', 'HR Madhav', 'HR Maheswar'];
  selectedPerson: string = '';

  constructor(public dialogRef: MatDialogRef<TransferAppointmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    
  }

  onClose(): void {
    this.dialogRef.close();
  }

  // onSubmit(): void {
  //   console.log("clicksubmitttt")
 
  // }
  onSubmit(): void {
    console.log("Selected Person:", this.selectedPerson);
    console.log("Other Data:", this.data);
    
    // You can send the selectedPerson along with other data to the backend or handle it as needed
    const submissionData = {
      ...this.data,
      selectedHr: this.selectedPerson
    };
    console.log("Submission Data:", submissionData);

    this.dialogRef.close(submissionData);
  }

}
