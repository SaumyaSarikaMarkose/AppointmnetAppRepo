import { Injectable, OnInit } from '@angular/core';

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
export class AuthService{
   private userStorageKey = 'details'

  constructor() { }

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

  isLoggedIn(): boolean {
    const savedData = localStorage.getItem(this.userStorageKey);
    return savedData !== null; // Check if user data exists in localStorage
  }

}
