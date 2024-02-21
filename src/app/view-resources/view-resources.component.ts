import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailTriggerComponent } from '../components/email-trigger/email-trigger.component';
import { UpdateEmployeeComponent } from '../components/update-employee/update-employee.component';
import { Employee } from '../employee';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.scss']
})
export class ViewResourcesComponent implements OnInit {
  employees: any;
  dataSource !: MatTableDataSource<any>;
  public user: any;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  options = [

    { projectId: 100878716, projectName: 'GE Corp - Application Services' },

    { projectId: 100945548, projectName: 'GE Corp - SC NextGen CW' },

    { projectId: 100930301, projectName: 'GE BOX Separation' },

  ]

  constructor(  private service: DataServiceService,public dialog: MatDialog, 
    private router: Router) {}


    ngOnInit(): void {
     this.GetUser();
    }
  
    GetUser(){
      this.service.GetUsers().subscribe((res: any) => {
        console.log(res);
        this.employees = res; 
      });
    }

    getEmployeeById(id:number){
      this.service.GetUser(id)
      .subscribe((data)=>{
        this.user = data;    
      }); 
    }

    reloadData() {
      this.employees = this.service.GetUsers();
    }

  delete(id: any,i: any) {
    
    if (window.confirm('Do you want to go ahead?')) {
      this.service.deleteUser(id).subscribe(() => {
        this.employees.splice(i, 1);
      });
    }
  }

  OpenDialog(id: any,empData:any){
    this.dialog.open(UpdateEmployeeComponent, {
      width: '800px',
      height:'550px',
      data: {
        id,
        empData
      },  backdropClass: 'backdropBackground',
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employees', id]);
  }
 
  getEmployeeList() {
    this.service.GetUsers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  onUpdateForm(value: any , empId:number){
    let body = {
      empName: value.empName,
      empId: value.empId,
      projectId:value.projectId,
      projectName: value.projectName,
      emailId: value.emailId,
      accountName: value.accountName,
      empType: value.empType,
      abl: value.abl
      }

      this.service.updateUser(empId, body)
      .subscribe((res:any)=>{
        console.log(res);
        this.GetUser();

      }
        
      )
      
  }
  

  }