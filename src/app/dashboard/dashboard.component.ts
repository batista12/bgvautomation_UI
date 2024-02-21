import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';
import { Employee } from '../employee';
import { OnboardingService } from '../service/onboarding-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data1:any;
  data:any;
  item: any;
  public employeeCount: number = 0 ;
  cardCheck:any;
  @ViewChild('descriptionTemplate', { static: true }) descriptionTemplate: TemplateRef<any> | null = null;
  Count: any;
  data2: any;
  Count1: any;
  data3: any;
  Count3: any;
 
  constructor(private dataService : DataServiceService, private onboardingService : OnboardingService ) { }
  ngOnInit(): void {
    this.data = [
      { title:'Resources',employeeCount:
      this.dataService.GetUsers().subscribe({
        next: (res) => {
       this.employeeCount = ((<any>res).length);        
        }
        }), icon:"card-header-info", fontIcon:"fa-handshake-o", footerTitle: "Click on card to view more details"},
        
        // { title:'Onboarding Initiated',Count:
        // this.onboardingService.GetOnboardedUsers().subscribe({
        //   next: (res) => {
        //  this.Count = ((<any>res).length);        
        //   }
        //   }), icon:"card-header-info", fontIcon:"fa-handshake-o", footerTitle: "Click on card to view more details"},  

        
      //{title:'Onboarding Initiated', employeeCount:10, icon:"card-header-info", fontIcon:"fa-handshake-o", footerTitle: "Click on card to view more details"},
      //{title:'Onboarding Pending', employeeCount:5, icon:"card-header-danger", fontIcon:"fa-exclamation-circle", footerTitle: "Click on card to view more details"},
      //{title:'Onboarding Completed', employeeCount:5, icon:"card-header-success", fontIcon:"fa-check-circle", footerTitle: "Click on card to view more details"}
   ]
   this.data1 = [
    { title:'Onboarding Initiated',Count:
    this.onboardingService.GetOnboardedUsers().subscribe({
      next: (res) => {
     this.Count = ((<any>res).length);        
      }
      }), icon:"card-header-danger", fontIcon:"fa-hourglass-start", footerTitle: "Click on card to view more details"},
   ]
   this.data2 = [
    { title:'Onboarding Pending',Count1:
    this.dataService.GetPendingUsers().subscribe({
      next: (res) => {
     this.Count1 = ((<any>res).length);        
      }
      }), icon:"card-header-success", fontIcon:"fa-exclamation-circle", footerTitle: "Click on card to view more details"},
   ]
   this.data3 = [
    { title:'Onboarding Completed',Count3:
    this.onboardingService.GetCompletedUsers().subscribe({
      next: (res) => {
     this.Count3 = ((<any>res).length);        
      }
      }), icon:"card-header-warning", fontIcon:"fa-check-circle", footerTitle: "Click on card to view more details"},
   ]
  }
  openDescription(index: number) {
    this.cardCheck = this.data[index];
  }
  openDescription1(index: number) {
    this.cardCheck = this.data1[index];
  }
  openDescription2(index: number) {
    this.cardCheck = this.data2[index];
  }
  openDescription3(index: number) {
    this.cardCheck = this.data3[index];
  }
}
