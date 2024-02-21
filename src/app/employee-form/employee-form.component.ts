import { Component, NgZone, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DataServiceService } from '../service/data-service.service';

import { Router } from '@angular/router';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

import { MatDatepickerModule } from '@angular/material/datepicker';

import * as XLSX from 'xlsx';

import { MatSort } from '@angular/material/sort';

import { MessageService } from 'primeng/api';



interface Status {



  value: string;



  viewValue: string;



}



@Component({

  selector: 'app-employee-form',

  templateUrl: './employee-form.component.html',

  styleUrls: ['./employee-form.component.scss'],

  providers: [MessageService],

})

export class EmployeeFormComponent implements OnInit {



  empForm: FormGroup;

  submitted = false;

  resources: any;

  showAdd !: boolean;

  value !: Date;

  public fieldDisabled: boolean = false;

  displayedColumns: string[] = ['empId', 'empName', 'projectId', 'projectName', 'emailId', 'accountName', 'abl', 'empType'];

  dataSource !: MatTableDataSource<any>;

  public data: any;

  ExcelData: any;

  exceltojsondata: any;

  file: any;

  testfile: any;

  fileName: any;

  arr: Array<any>;

  public excelData: any;

  empData = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;



  options = [

    { projectId: 100878716, projectName: 'GE Corp - Application Services' },

    { projectId: 100945548, projectName: 'GE Corp - SC NextGen CW' },

    { projectId: 100930301, projectName: 'GE BOX Separation' },

  ]



  constructor(private formBuilder: FormBuilder, private service: DataServiceService, private dialog: MatDialog, private messageService: MessageService,

    private ngZone: NgZone, private router: Router) {



    /* this.empForm = this.formBuilder.group({

      empId: ['', Validators.required],

      empName: ['', Validators.required],

      projectId: ['', Validators.required],

      projectName: ['', Validators.required],

      emailId: ['', Validators.required],

      accountName: ['', Validators.required],

      abl: ['', Validators.required],

      empType: ['', Validators.required]

    }); */



    this.empForm = new FormGroup(

      {

        empId: new FormControl('', [Validators.required, Validators.pattern("0*[1-9][0-9]*")]),

        empName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]*")]),

        projectId: new FormControl(null, [Validators.required]),

        projectName: new FormControl(null, [Validators.required]),

        emailId: new FormControl('', [Validators.required]),

        accountName: new FormControl('GE Corporate', [Validators.required, Validators.pattern("[a-zA-Z0-9 ]*")]),

        abl: new FormControl('CSD', [Validators.required]),

        empType: new FormControl('', [Validators.required]),



      }

    );





    this.arr = [



      { empId: '', empName: '', projectId: '', projectName: '', emailId: '', accountName: '', abl: '', empType: '' },



    ];

  }



  change() {

    this.empForm.get('projectId')?.valueChanges.subscribe(projectId => {

      const selectedOption = this.options.find(option => option.projectId == projectId);

      const selectedName = selectedOption ? selectedOption.projectName : null;

      this.empForm.get('projectName')?.setValue(selectedName);

    });

  }





  get empId() {

    return this.empForm.get('empId');

  }



  get empName() {

    return this.empForm.get('empName');

  }



  get projectId() {

    return this.empForm.get('projectId');

  }



  get projectName() {

    return this.empForm.get('projectName');

  }



  get emailId() {

    return this.empForm.get('emailId');

  }



  get accountName() {

    return this.empForm.get('accountName');

  }



  get abl() {

    return this.empForm.get('abl');

  }



  get empType() {

    return this.empForm.get('empType');

  }







  readExcel(event: any) {



    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      var workBook = XLSX.read(fileReader.result, { type: 'binary' });

      var sheetNames = workBook.SheetNames;

      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);

      console.log(this.ExcelData);

      this.exceltojsondata = this.ExcelData.find((data: any) => {

        this.excelData = data;

      })

      console.log(this.excelData);

    }



  }

  readExceltest(event: any) {



    this.file = event.target.files[0];

    console.log(event);

    console.log(event.target.files);

    console.log(this.file);

    this.testfile = event.target.files;



  }



  exportToExcel($event: any) {

    const fileName = 'Resource_template.xlsx';

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.arr);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'test');

    XLSX.writeFile(wb, fileName);

  }

  uploadExcel() {

    console.log(this.ExcelData);

    for (let i = 0; i < this.ExcelData.length; i++) {

      this.excelData = this.ExcelData[i];

      this.service.AddUser(this.excelData).subscribe({

        next: (val: any) => {

          this.service.GetUsers();

          this.ngZone.run(() => this.router.navigateByUrl('/viewresources'));

        },

        error: (err: any) => {

          console.log(err);

          this.ngZone.run(() => this.router.navigateByUrl('/viewresources'));

        },

      })

    }

    this.messageService.add({

      severity: 'success',

      key: 'tc',

      summary: 'Success',

      detail: 'Multiple Employee Added Successfully',

    });

  }



  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {

      this.dataSource.paginator.firstPage();

    }

  }



  ngOnInit() {

    this.change();

  }



  get f() { return this.empForm.controls; }





  onSubmit(): any {

    this.service.AddUser(this.empForm.value).subscribe(

      () => {

        console.log('Data added successfully!');

        this.ngZone.run(() => this.router.navigateByUrl('/viewresources'));

      },

      (err) => {

        console.log(err);

      }

    );

  }

}