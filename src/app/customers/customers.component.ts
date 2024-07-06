import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomersService } from './service/customers.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-customers',

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.less',
  animations: [
    trigger('toggleIframe', [
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      transition('visible <=> hidden', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]

})
export class CustomersComponent implements OnInit {

  isIframeVisible = false;
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

  toggleIframe() {
    this.isIframeVisible = !this.isIframeVisible;
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
