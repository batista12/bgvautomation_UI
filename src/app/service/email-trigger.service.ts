import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, Observable } from 'rxjs';
import { Details } from '../Details';

@Injectable({
    providedIn: 'root'
  })

  export class EmailTriggerService {
    REST_API: string = 'http://localhost:8080/testapp';
    
    
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
    constructor(private httpClient : HttpClient){}

    SendEmail(data: any): Observable<Object> {
        let API_URL = `${this.REST_API}/getemployeedetails1`;
        return this.httpClient
          .post(API_URL, data,{observe:'response'});
      }
    
    SendEmailToPO(data: any): Observable<Object> {
        let API_URL = `${this.REST_API}/getemployeedetails`;
        return this.httpClient
          .post(API_URL, data,{observe:'response'});
      }
    }