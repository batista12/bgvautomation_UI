import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent, canActivate:[AuthGuard]},
  {path: 'admin-dashboard', component: AdminDashboardComponent , canActivate:[AuthGuard]},
  {path: '', component: LoginComponent},
  {path:'contactUs', component: ContactUsComponent},
  {path:'timeline',component:TimelineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
