import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  employee: any = [];

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.service.GetUsers().subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    });
  }

}
