import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employee } from 'src/app/employee';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-complete-onboarding-steps',
  templateUrl: './complete-onboarding-steps.component.html',
  styleUrls: ['./complete-onboarding-steps.component.scss']
})
export class FileUploadComponent implements OnInit {
  info: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<FileUploadComponent>,private https: HttpClient) { }

  resourceFromTable:any;
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  public msg = false;

  

  ngOnInit(): void {
    this.resourceFromTable = this.data.empData;   

  }


  public onFileChanged(event) {
  
      if (event.target.files[0]) {
        const file: File = event.target.files[0];
        var pattern = /image-*/;
  
        if (!file.type.match(pattern)) {
          alert('Invalid format');
          return;
        }
  
        this.selectedFile = event.target.files[0];
      }
    }
   
 
  onUpload() {
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    console.log(this.selectedFile);
    
    const uploadImageData = new FormData();
 
    uploadImageData.append('employeeid',this.data.empData.empId);
    uploadImageData.append('employeename',this.data.empData.empName);
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  
    this.https.post('http://localhost:8080/image/upload', uploadImageData,{ observe: 'response' })
      .subscribe((response) => {
        if (response.status === 406) {
          this.message = 'Image uploaded successfully';
          console.log(response)
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }

 
    getImage() {
   
    this.https.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
  // GetImagesList() {
  //   return this.https.get(`http://localhost:8080/images`);
  // }
  }