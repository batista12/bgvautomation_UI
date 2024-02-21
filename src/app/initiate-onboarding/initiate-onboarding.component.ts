import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmailTriggerComponent } from '../components/email-trigger/email-trigger.component';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-initiate-onboarding',
  templateUrl: './initiate-onboarding.component.html',
  styleUrls: ['./initiate-onboarding.component.scss']
})
// @Component({
//   selector: 'content',
//   template: '<button mat-raised-button (click)="OpenDialog(employee)">Open dialog</button>',
//   styles: [''],
// })

export class InitiateOnboardingComponent implements OnInit {
  employee: any = [];
  constructor(public dialog: MatDialog,private service: DataServiceService) { }

  ngOnInit(): void {
    this.service.GetUsers().subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    })
  }

  OpenDialog(empData:any){
    const timeout = 11000;
    const dialogRef=
    this.dialog.open(EmailTriggerComponent, {  
      width: '480px',
      height:'525px', 
      data: {
        empData
      },
    }); 
    dialogRef.afterOpened().subscribe(_ => {
      // setTimeout(() => {
      //    dialogRef.close();
      // }, timeout)
    })
   }
  }
  
