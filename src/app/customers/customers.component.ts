import { Component } from '@angular/core';
import { Customer } from './customer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-customers',

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.less'
})
export class CustomersComponent {
  IFrameUrl? : SafeResourceUrl;
  displayIFrame = false;

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

  constructor(private sanitizer: DomSanitizer) {

  }
  openOptions() {
    console.log("click");
  }

  onSubmit() {
    console.log(this.customer);
  }
  newCustomerDialog() : void {
      this.IFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/newform');
      this.displayIFrame = true;
  }
}
