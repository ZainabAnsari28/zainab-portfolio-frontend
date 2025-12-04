import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/contact'; 

  constructor(private http: HttpClient) {}
  submitContact(contactData: any): Observable<string> {
  return this.http.post<string>('http://localhost:8080/contact', contactData, {
    responseType: 'text' as 'json'
  });
}

}
