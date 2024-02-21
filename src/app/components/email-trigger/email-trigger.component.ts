import { HttpClient } from '@angular/common/http';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employee } from 'src/app/employee';
import { NgForm, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { MaybeForwardRefExpression } from '@angular/compiler';
import { Router } from '@angular/router';
import { EmailTriggerService } from 'src/app/service/email-trigger.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipsModule} from '@angular/material/chips';
import * as e from 'express';

export interface Emails {
  name: string;
}


@Component({
  selector: 'app-email-trigger',
  templateUrl: './email-trigger.component.html',
  styleUrls: ['./email-trigger.component.scss']
})
export class EmailTriggerComponent implements OnInit {
   resourceFromTable:any;
  showForm1:boolean = false;
  showForm2:boolean = false;
  btnState:boolean=false;
  title = 'EmailTemplate';
  

  employeedetails:any= {
  
   "emailList":[] ,
   "employee": []
   };
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<EmailTriggerComponent>,private https: HttpClient, private service: EmailTriggerService,private ngZone: NgZone, private router: Router) 
  {}

  ngOnInit(): void {
    this.resourceFromTable = this.data.empData;    
  }

  dataset: Details= {
    cc_email : [{address: ""}],
    // cc_email : "",
    to_email : "" 
  };
 
  addEmailCC(email:string){
    this.dataset.cc_email.push({address: " "});
    // this.dataset.cc_email.push();
  }

  
  emailToEmployee(form:NgForm){
    
    console.log(this.data.empData);
   this.employeedetails.employee.push(this.data.empData);
    this.employeedetails.emailList.push(this.dataset);
    console.log(this.employeedetails);
    this.service.SendEmail(this.employeedetails).subscribe(
      () => {
        console.log('Email Sent successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
      },
      (err) => {
        console.log(err);
        this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
      }
    );

    // form.resetForm();
    // this.CCemails.splice(0, this.CCemails.length);
  }


  emailToPO(){
    console.log(this.data.empData);
    this.employeedetails.employee.push(this.data.empData);
    this.employeedetails.emailList.push(this.dataset);
    console.log(this.employeedetails);
    this.service.SendEmailToPO(this.employeedetails).subscribe(
      () => {
        console.log('Email Sent successfully!');
        
        this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
      },
      (err) => {
        console.log(err);
       
        this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
      }
      
    );
    // this.CCemails.splice(0, this.CCemails.length);
    // form.resetForm();
    
  }
  
  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
   
    showFormSoon() {
        this.showForm1 = true
        this.showForm2 =false
    }
    showFormSoon2() {
   
      this.showForm2 = true
      this.showForm1 =false 
  }
  
 
}


interface Details{
  cc_email:any[];
  // cc_email:string;
  to_email:string;
  
}
