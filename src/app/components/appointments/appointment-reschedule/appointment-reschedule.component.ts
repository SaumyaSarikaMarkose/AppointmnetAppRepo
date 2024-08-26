import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../../interfaces/item.interface';
import {  ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-appointment-reschedule',
  templateUrl: './appointment-reschedule.component.html',
  styleUrls: ['./appointment-reschedule.component.css']
})
export class AppointmentRescheduleComponent implements OnInit{
  items: Item[] = [];
  rescheduleForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<AppointmentRescheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private itemService: ItemService,
    private fb: FormBuilder){
      this.rescheduleForm = this.fb.group({
        date: [data.date],
        scheduler: [data.scheduler],
        inviter: [data.inviter],
        contact: [data.contact],
        priority: [data.priority],
        approval: [data.approval]
      });
    }

  ngOnInit(): void {
    
  }

  onSave(): void {
    if (this.rescheduleForm.valid) {
      this.dialogRef.close(this.rescheduleForm.value); 
      console.log("llllllllllllllllnnnmm88888888",this.rescheduleForm.value);
      const newItem: Item = {
        id: 0,
        approval: this.rescheduleForm.value.approval,
        contact: this.rescheduleForm.value.contact,
        date: this.rescheduleForm.value.date,
        inviter: this.rescheduleForm.value.inviter,
        priority: this.rescheduleForm.value.priority,
        scheduler: this.rescheduleForm.value.scheduler
      };
      console.log("NNNNNNNNNNNNNNNNNNNEW",newItem)
      this.itemService.updateItem(newItem);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
