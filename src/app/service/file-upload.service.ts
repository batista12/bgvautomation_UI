import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../employee';
import {Observable} from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class FileUploadService {
baseApiUrl = "https://file.io"
	
constructor(private http:HttpClient) { }

upload(file):Observable<any> {
	const formData = new FormData();
	formData.append("file", file, file.name);
	return this.http.post(this.baseApiUrl, formData)
}
}
