import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService,userDetils } from 'src/app/services/item.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  userData:userDetils[] = [];

  constructor(private fb: FormBuilder,
    private itemservice:ItemService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      organization: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      whatsappNumber: [''],
      website: [''],
      address: [''],
      pinCode: [''],
      city: [''],
      state: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      accountType: ['individual', Validators.required] 
    });
  }

  onSubmit(): void {
    console.log("jskfjsakjfasjkf")
    if (this.signupForm.valid) {
      console.log('Form Submitted signup', this.signupForm.value);
      const newData :userDetils ={
        username: this.signupForm.value.username,
        organization:this.signupForm.value.organization,
        email: this.signupForm.value.email,
        phoneNumber: this.signupForm.value.phoneNumber,
        whatsappNumber: this.signupForm.value.whatsappNumber,
        website: this.signupForm.value.website,
        address: this.signupForm.value.address,
        pinCode: this.signupForm.value.pinCode,
        city: this.signupForm.value.city,
        state:this.signupForm.value.state,
        password: this.signupForm.value.password,
        accountType: this.signupForm.value.accountType

      }
      this.itemservice.addUserDetails(newData);
      this.router.navigate(['/signup-detail']);
    }
  }

}
