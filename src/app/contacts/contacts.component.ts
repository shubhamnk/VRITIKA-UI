import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  list1 : string = 'List 1';


  constructor(private cs:ContactsService) { }

  ngOnInit(): void {
    this.cs.fetchContacts().subscribe((data)=>{
      console.log(data.address.city);
      this.list1 = data.address.city;
    },(error)=>{
      console.log("HELLO ERROR",error);
    });
  }

}
