import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
  
})
export class UpdateEmployeeComponent implements OnInit {
 
 
  public updateForm !: FormGroup;

public editData: any;
  messageService: any;
  arr : Array<any>;
  employee: any = [];
 
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private service: DataServiceService,
  ) {

    this.arr = [

      { empId : '' ,	empName	: '' ,projectId:'',	projectName:'',	emailId:'',	accountName: '',	abl:'',	empType:''},

    ];
  }
  

  ngOnInit() {this.updateForm  = this.formBuilder.group({
    empId: ['', Validators.required, Validators.pattern("0*[1-9][0-9]*")],
    empName: ['', Validators.required],
    projectId: ['', Validators.required],
    projectName: ['', Validators.required],
    emailId: ['', Validators.required],
    accountName: ['', Validators.required],
    abl: ['CSD', Validators.required],
    empType: ['', Validators.required]
  });
  this.service.GetUsers().subscribe((res: any) => {
    console.log(res);
    this.employee = res;
  })
}
  editUser(element: any){

    this.editData = element;

    console.log(this.editData);

   

    this.updateForm.controls['empId'].setValue(element.empId);

    this.updateForm.controls['empName'].setValue(element.empName);

    this.updateForm.controls['projectId'].setValue(element.projectId);

    this.updateForm.controls['projectName'].setValue(element.projectName);

    this.updateForm.controls['emailId'].setValue(element.emailId);

    this.updateForm.controls['accountName'].setValue(element.accountName);

    this.updateForm.controls['abl'].setValue(element.abl);
    


    this.updateForm.controls['empType'].setValue(element.empType);

  }

  onUpdateForm(updateForm: { value: { empId : any,	empName	: any ,projectId:any,	projectName:any,	emailId:any,	accountName: any,	abl:any,	empType:any }; }){

    
      
    let userData:any = {};

    userData.empId = updateForm.value.empId;
    userData.empName = updateForm.value.empName; 
    userData.projectId = updateForm.value.projectId; 
    userData.projectName = updateForm.value.projectName;
    userData.emailId = updateForm.value.emailId;
    userData.accountName = updateForm.value.accountName; 
    userData.abl = updateForm.value.abl; 
    userData.empType = updateForm.value.empType; 
   
      // this.adminService.updateUser(userData.id , userData).subscribe({
        
      this.service.updateUser(userData.empId , userData).subscribe(response => {
        console.log(response);
        // alert(response);

        if(response == "Admin Profile updated succesfully"){
          this.messageService.add({
            severity: 'success',
            key:'tc',
            summary: 'Success',
            detail: response,
          })
          } else {
            this.messageService.add({
              severity: 'error',
              key:'tc',
              summary: 'Error',
              detail: response,
            })
          }
          
      
      })


  }

}