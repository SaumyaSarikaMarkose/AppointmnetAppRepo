import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { ItemService} from 'src/app/services/item.service';
import { Item } from '../../interfaces/item.interface';
import { Observable, of } from 'rxjs';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { TransferAppointmentsComponent } from './transfer-appointments/transfer-appointments.component';
import { RejectAppointmentComponent } from './reject-appointment/reject-appointment.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit{

  items: Item[] = [];
  private editDialogRef: MatDialogRef<AppointmentDetailsComponent> | null = null;

  constructor(private dialog: MatDialog,
    private itemService: ItemService,
    private snackBar: MatSnackBar 
  ){}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAppointmentsComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Appointment data:', result);
        
        const newItem: Item = {
          id: 0,
          approval: result.approval,
          contact: result.contact,
          date: result.date,
          inviter: result.inviter,
          priority: result.priority,
          scheduler: result.scheduler
        };
        this.itemService.addItem(newItem);
        this.snackBar.open('Successfully Added', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'] // Add custom class for styling
        });
        this.items = this.itemService.getItems();
      }
    });
  }

  handleItemDeleted(id: number) {
    console.log("oopppppp",id)
    this.itemService.deleteItem(id);
    this.items = this.itemService.getItems();
  }
  EditItem(item:any){
   
    this.dialog.open(AppointmentDetailsComponent, {
      data: item,
      width: '400px'
    });
  }

  transferItem(item:any){
 
    this.dialog.open(TransferAppointmentsComponent,{
      data: item,
      width: '400px'
    })
  }
  rejecteItems(item:any){
    this.dialog.open(RejectAppointmentComponent,{
      data: item,
      width: '400px'
    })
  }
  
}
