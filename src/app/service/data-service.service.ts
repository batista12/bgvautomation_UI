import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../employee';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  REST_API: string = 'http://localhost:8080/api/v1';
  
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient : HttpClient){}

  
  // resourcesList = [
  //   {Id:1,empId: 4356667, empName: "Shikha Sharma", projectId: 7689654, projectName: "CAS", empMailId: "shikha.sh@capgemini.com", accountName:"GE Corp", ablLine:"CSD", empType: "employee"},
  //   {Id:2,empId: 4387655, empName: "Aashima Nag", projectId: 7689643, projectName: "CAS", empMailId: "aashima@capgemini.com", accountName:"GE Corp", ablLine:"CSD", empType: "employee"},
  //   {Id:3,empId: 4876589, empName: "sk", projectId: 7689143, projectName: "CAS", empMailId: "sk@capgemini.com", accountName:"GE Corp", ablLine:"CSD", empType: "employee"},
  //   {Id:4,empId: 4356667, empName: "Shubham Sharma", projectId: 7689875, projectName: "CAS", empMailId: "shubhamh@capgemini.com", accountName:"GE Corp", ablLine:"CSD", empType: "employee"},
  //   {Id:5,empId: 4356667, empName: "Sumeet Hashia", projectId: 76854332, projectName: "CAS", empMailId: "sumeet@capgemini.com", accountName:"GE Corp", ablLine:"CSD", empType: "employee"},
  //   {Id:6,empId: 4356667, empName: "Ganesh", projectId: 76896765, projectName: "CAS", empMailId: "ganesh@capgemini.com", accountName:"GE Corp", ablLine:"CSD", empType: "employee"}]

  

  GetUsers() {
    return this.httpClient.get(`${this.REST_API}/employees`);
  }
  GetPendingUsers() {
    return this.httpClient.get(`${this.REST_API}/pendingemployees`);
  }
  AddUser(data: Employee): Observable<Object> {
    let API_URL = `${this.REST_API}/employees`;
    return this.httpClient
      .post(API_URL, data);
  }
  deleteUser(empid: any): Observable<any> {
    let API_URL = `${this.REST_API}/employees/${empid}`;
    return this.httpClient
      .delete(API_URL,{ headers: this.httpHeaders })
  }
  updateUser(empid: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/employees/${empid}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders });
  }
  GetUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/employees/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
    );
   }
   GetCompletedUsers1() {
    return this.httpClient.get(`http://localhost:8080/emailapp/emaillist2`);
  } 

}
