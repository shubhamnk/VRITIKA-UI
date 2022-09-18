import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  fetchContacts() {
    return this.http.get<any>(environment.baseUrl+'sampleresponce.php');
  }
  
}

