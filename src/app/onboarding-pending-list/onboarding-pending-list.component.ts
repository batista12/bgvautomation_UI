import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';


@Component({
  selector: 'app-onboarding-pending-list',
  templateUrl: './onboarding-pending-list.component.html',
  styleUrls: ['./onboarding-pending-list.component.scss']
})
export class OnboardingPendingListComponent implements OnInit {
 
  employee:any = [];
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.service.GetPendingUsers().subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    });
  }

}
