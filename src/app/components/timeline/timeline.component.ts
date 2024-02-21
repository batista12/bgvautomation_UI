import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  
  
  constructor(private dialogRef: MatDialogRef<TimelineComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
