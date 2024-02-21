import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
;


@Component({
  selector: 'app-ask-podialog',
  templateUrl: './ask-podialog.component.html',
  styleUrls: ['./ask-podialog.component.scss']
})
export class AskPODialogComponent implements OnInit {
  form: FormGroup = new FormGroup({});  
  resources:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<AskPODialogComponent>,fb: FormBuilder)
  {
    this.form = fb.group({  
      PONumber: ['', [Validators.required, Validators.pattern("[0-9]{12}")]]  
    })  
  }

  ngOnInit(): void {
    this.resources = this.data.empData;     
  }
  get f(){  
    return this.form.controls;  
  }  
  openNewTab() {
    const url ='http://bgv.capgemini.com';
     window.open(url, '_blank');
    
  }
  onSubmit(){  
    console.log(this.form.value);  
  }
  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
