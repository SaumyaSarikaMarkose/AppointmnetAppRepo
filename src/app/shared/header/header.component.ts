import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() search = new EventEmitter<string>();

  title = 'Kenland';
  searchQuery = '';

  constructor(){}

  ngOnInit(): void {
    
  }

  onSearch() {
    this.search.emit(this.searchQuery);
  }

}
