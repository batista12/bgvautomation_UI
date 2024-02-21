import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CompleteOnboardingComponent } from '../complete-onboarding/complete-onboarding.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { InitiateBgvComponent } from '../initiate-bgv/initiate-bgv.component';
import { InitiateOnboardingComponent } from '../initiate-onboarding/initiate-onboarding.component';
// import { AdminLayoutComponent } from './admin-layout.component';
import { ViewResourcesComponent } from '../view-resources/view-resources.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
    { path: 'employee', component: EmployeeFormComponent, canActivate:[AuthGuard] },
    { path: 'onboarding', component: InitiateOnboardingComponent, canActivate:[AuthGuard] },
    { path: 'bgv', component: InitiateBgvComponent, canActivate:[AuthGuard] },
    { path: 'viewresources', component: ViewResourcesComponent , canActivate:[AuthGuard]},
    { path: 'complete-onboarding', component: CompleteOnboardingComponent , canActivate:[AuthGuard] }

]
