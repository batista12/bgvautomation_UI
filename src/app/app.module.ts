import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './app.routing';
import { AskPODialogComponent } from './initiate-bgv/ask-podialog/ask-podialog.component';
import {HttpClientModule} from '@angular/common/http';
import { CompleteOnboardingComponent } from './complete-onboarding/complete-onboarding.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import { TimelineComponent } from '../app/components/timeline/timeline.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    AskPODialogComponent,
    CompleteOnboardingComponent,
    AdminDashboardComponent,
    TimelineComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    ComponentsModule,
    ToastModule
    

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
