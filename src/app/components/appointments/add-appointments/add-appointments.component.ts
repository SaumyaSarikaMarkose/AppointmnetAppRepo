import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.css']
})
export class AddAppointmentsComponent implements OnInit {
  appointmentForm: FormGroup;
  currentNo: number = 1;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAppointmentsComponent>,
    private datePipe: DatePipe 
  ){
    this.appointmentForm = this.fb.group({
      
      date: ['', Validators.required],
      scheduler: ['', Validators.required],
      inviter: ['', Validators.required],
      contact: ['', Validators.required],
      priority: ['', Validators.required],
      approval: [false]
    });
  }

  ngOnInit(): void {
    
  }

  getNextNo(): number {
    
    return this.currentNo++;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.appointmentForm.valid) {
      // this.dialogRef.close(this.appointmentForm.value);
      if (this.appointmentForm.valid) {
        const formattedDate = this.datePipe.transform(this.appointmentForm.value.date, 'dd/MM/yyyy');
        const formValue = {
          ...this.appointmentForm.value,
          date: formattedDate  // Save the formatted date
        };
        this.dialogRef.close(formValue);
      }
    }
  }

}
