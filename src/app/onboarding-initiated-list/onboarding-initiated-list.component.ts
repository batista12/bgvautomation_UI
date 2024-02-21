import { Component, OnInit } from '@angular/core';

import { OnboardingService } from '../service/onboarding-service';

@Component({
  selector: 'app-onboarding-initiated-list',
  templateUrl: './onboarding-initiated-list.component.html',
  styleUrls: ['./onboarding-initiated-list.component.scss']
})
export class OnboardingInitiatedListComponent implements OnInit {
  resourcesList:any;
  employee: any = [];
  constructor(private service: OnboardingService) { }

  
  ngOnInit(): void {
    this.service.GetOnboardedUsers().subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    });
  }
 
}
