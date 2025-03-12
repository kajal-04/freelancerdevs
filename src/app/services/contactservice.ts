import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ContactFormModel } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://api.freelancerdevs.com/api/v1/prospect';
  constructor(private http: HttpClient) {}

  createContact(data: ContactFormModel): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
