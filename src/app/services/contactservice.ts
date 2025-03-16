import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { ContactFormModel } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://api.freelancerdevs.com';
  constructor(private http: HttpClient) {}

  createContact(data: ContactFormModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/prospect`, data).pipe(map(data => data));
  }

  getCountryCodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/codes`).pipe(map(data => data));
  }
}
