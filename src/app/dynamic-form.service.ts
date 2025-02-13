import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerFormConfig } from './server-ui.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  private apiUrl = '/api/form-config'; // Replace with actual API URL
  // private apiUrl = 'assets/mock-form.json';


  constructor(private http: HttpClient) {}

  getFormConfig(): Observable<ServerFormConfig> {
    return this.http.get<ServerFormConfig>(this.apiUrl);
    // const headers = { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }; // Modify as needed
    // return this.http.get<ServerFormConfig>(this.apiUrl, { headers });
  }
}
