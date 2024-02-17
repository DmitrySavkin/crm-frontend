import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomersService } from './service/customers.service';

@Component({
  selector: 'app-customers',

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.less'
})
export class CustomersComponent implements OnInit {
  IFrameUrl? : SafeResourceUrl;
  displayIFrame = false;

  constructor(private customerService: CustomersService) {}
  customer: Customer = {

      id:0,
      title:"",
      contactPerson: "",
      responsiblePerson: ""
  };

  
  customerList: Customer[] = [
     {
      id:1,
      title: "ИП Гаврилов",
      contactPerson: "Гаврилов",
      responsiblePerson: "Никитенко"
     }
  ];


  ngOnInit(): void {
  }

  openOptions() {
    console.log("click");
  }

  
  submitForm(form: any): void {
    // Handle form submission here
    console.log(form.value);
    this.customerService.addCustomer(form.value).subscribe(response => {
      console.log('Form data saved successfully:', response);
      
    }, error => {
      console.error('Error saving form data:', error);
    });
  }
}
