import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit, AfterViewInit {

  @Input() items: any[] = [];
  @Output() itemDeleted = new EventEmitter<number>();
  @Output() itemEdit = new EventEmitter<any>();
  @Output() transferItems = new EventEmitter<any>();
  @Output() rejectItems = new EventEmitter<any>();

  displayedColumns: string[] = ['Date', 'Scheduler', 'Inviter', 'Contact', 'Priority', 'actions'];
  dataSource = new MatTableDataSource<any>(this.items);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.dataSource.data = this.items;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.dataSource.data = this.items;
    this.dataSource.paginator = this.paginator; // Ensure paginator is updated
  }

  deleteItem(id: number): void {
    this.itemDeleted.emit(id);
  }

  editItem(item: any): void {
    this.itemEdit.emit(item);
  }

  acceptItem(id: any) {
    // implementation
  }

  holdItem(id: any) {
    // implementation
  }

  transferItem(item: any) {
    this.transferItems.emit(item);
  }

  rejectItem(item: any) {
    this.rejectItems.emit(item)
  }
}
