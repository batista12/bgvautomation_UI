import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InitiateBgvComponent } from '../initiate-bgv/initiate-bgv.component';
import { InitiateOnboardingComponent } from '../initiate-onboarding/initiate-onboarding.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { ViewResourcesComponent } from '../view-resources/view-resources.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { ResourcesListComponent } from '../resources-list/resources-list.component';
import { OnboardingInitiatedListComponent } from '../onboarding-initiated-list/onboarding-initiated-list.component';
import { OnboardingPendingListComponent } from '../onboarding-pending-list/onboarding-pending-list.component';
import { OnboardingCompletedListComponent } from '../onboarding-completed-list/onboarding-completed-list.component';
import { UpdateEmployeeComponent } from '../components/update-employee/update-employee.component';
//import { UpdateEmployeeComponent } from '../components/update-employee/update-employee.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatTabsModule,
  ],
  declarations: [
    DashboardComponent,
    InitiateBgvComponent,
    InitiateOnboardingComponent,
    EmployeeFormComponent,
    ResourcesListComponent,
    OnboardingInitiatedListComponent,
    OnboardingPendingListComponent,
    OnboardingCompletedListComponent,
    ViewResourcesComponent,
    UpdateEmployeeComponent 
  ]
})

export class AdminLayoutModule {}
