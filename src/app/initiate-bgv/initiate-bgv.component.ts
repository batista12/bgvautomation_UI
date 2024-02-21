import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import {MatDialog} from '@angular/material/dialog';
import { AskPODialogComponent } from './ask-podialog/ask-podialog.component';
import { OnboardingService } from '../service/onboarding-service';

@Component({
  selector: 'app-initiate-bgv',
  templateUrl: './initiate-bgv.component.html',
  styleUrls: ['./initiate-bgv.component.scss']
})
export class InitiateBgvComponent implements OnInit {
  employee: any = [];
  constructor(
  //  public service: OnboardingService,
    public service: DataServiceService,
    public dialog: MatDialog
    ) { }

    // ngOnInit(): void {
    //   this.service.GetCompletedUsers2().subscribe((res: any) => {
    //     console.log(res);
    //     this.employee = res;
    //   })
    // }
    ngOnInit(): void {
      this.service.GetCompletedUsers1().subscribe((res: any) => {
        console.log( "HI:: "+res);
        this.employee = res;
      })
    }

  OpenDialog(empData:any){
    this.dialog.open(AskPODialogComponent, {
      width: '450px',
      data: {
        empData
      },
    });
  }

}
