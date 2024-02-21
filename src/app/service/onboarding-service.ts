import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  REST_API: string = 'http://localhost:8080/emailapp/emaillist';
  
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient : HttpClient){}

  GetOnboardedUsers() {
    return this.httpClient.get(`${this.REST_API}`);}
 
    GetCompletedUsers() {
      return this.httpClient.get(`http://localhost:8080/image/imageupload`);
    }  
    
  
}
