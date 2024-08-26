import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface'


export interface userDetils {
  username:string,
  organization:string,
  email: string,
  phoneNumber:number,
  whatsappNumber:number,
  website: string,
  address:string,
  pinCode:number,
  city: string,
  state:string,
  password: string,
  accountType:boolean
}


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private localStorageKey = 'items';
  private userStorageKey = 'details'

  constructor() { }

  // getItems(): Item[] {
  //   const items = localStorage.getItem(this.localStorageKey);
  //   console.log("qqqqqqqqqqqqqqqqqqqqqqqq",items)
  //   return items ? JSON.parse(items) : [];
  // }
  getItems(): Item[] {
    const items = localStorage.getItem(this.localStorageKey);
    console.log("qqqqqqqqqqqqqqqqqqqqqqqq", items);
  
    if (items) {
      const parsedItems: Item[] = JSON.parse(items);
  
      // Function to parse different date formats
      const parseDate = (dateStr: string): Date => {
        // Try parsing known formats
        let parsedDate = new Date(dateStr);
  
        // Handle different date formats
        if (isNaN(parsedDate.getTime())) {
          // Attempt a custom format parsing if needed
          const parts = dateStr.split('/');
          if (parts.length === 3) {
            parsedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // Convert to YYYY-MM-DD format
          }
        }
  
        return parsedDate;
      };
  
      // Sort items by date in descending order
      parsedItems.sort((a, b) => {
        const dateA = parseDate(a.date).getTime();
        const dateB = parseDate(b.date).getTime();
        return dateB - dateA; // Descending order
      });
  
      return parsedItems;
    } else {
      return [];
    }
  }
  
  addUserDetails(formData:any){
    localStorage.setItem(this.userStorageKey, JSON.stringify(formData));
    console.log('Form Submitted111111111111111111111', formData);

  }
  verifyLogin(username: string, password: string): boolean {
    const savedData = localStorage.getItem(this.userStorageKey);
    console.log("sssavvvdt",savedData)
    if (savedData) {
      const formData = JSON.parse(savedData);
      return formData.username === username && formData.password === password;
    }
    return false;
  }
  addItem(item: Item): void {
    const items = this.getItems();
    item.id = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
    items.push(item);
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }
 
  updateItem(updatedItem: Item): void {
    console.log("Updating item:", updatedItem.id);
    const items = this.getItems();
    console.log("Current items:", items);
    // const index = items.findIndex(item => item.id === updatedItem.id);
    const index =  updatedItem.id;
    console.log("index0000",index)
    if (index !== -1) {
      console.log(`Found item at index ${index}, updating.`);
      items[index] = updatedItem;
      localStorage.setItem(this.localStorageKey, JSON.stringify(items));
    } else {
      console.log("Item not found with id:", updatedItem.id);
    }
  }
  
  
  
  
  deleteItem(id: number): void {
    let items = this.getItems();
    items = items.filter(item => item.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }
  
}
