import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../components/complete-onboarding-steps/complete-onboarding-steps.component';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { DataServiceService } from '../service/data-service.service';
import { OnboardingService } from '../service/onboarding-service';

@Component({
  selector: 'app-onboarding-completed-list',
  templateUrl: './onboarding-completed-list.component.html',
  styleUrls: ['./onboarding-completed-list.component.scss']
})
export class OnboardingCompletedListComponent implements OnInit {
 
  employee: any = [];
  constructor(public dialog: MatDialog ,private service: OnboardingService) { }

  ngOnInit(): void {
    this.service.GetCompletedUsers().subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    });
  }

  OpenTimeSeriesDialog(){
    this.dialog.open(TimelineComponent, {
      width: '500px',
      height:'520px',
    });
  }

}
