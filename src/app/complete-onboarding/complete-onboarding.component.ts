import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FileUploadComponent } from '../components/complete-onboarding-steps/complete-onboarding-steps.component';
import { EmailTriggerComponent } from '../components/email-trigger/email-trigger.component';
import { Employee } from '../employee';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-view-resources',
  templateUrl: './complete-onboarding.component.html',
  styleUrls: ['./complete-onboarding.component.scss']
})
export class CompleteOnboardingComponent implements OnInit {
 // resourcesList:any;
 employee: any = [];
 constructor(public dialog: MatDialog, private service: DataServiceService) { }

 // ngOnInit(): void {
 //   this.resourcesList = this.service.GetUsers();
 // }
 ngOnInit(): void {
   this.service.GetUsers().subscribe((res: any) => {
     console.log(res);
     this.employee = res;
   })
 }

 

 OpenDialog(empData:any){
   this.dialog.open(FileUploadComponent, {
     width: '450px',
     height:'530px',
     data: {
       empData
     },
   });
 }


}