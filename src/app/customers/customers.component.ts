import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomersService } from './service/customers.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder } from '@angular/forms';


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
  public editCustomerForm!: FormGroup
  
  constructor(private customerService: CustomersService,
    private formBuilder: FormBuilder
  ) {

    this.editCustomerForm = this.formBuilder.group(
      {
         customers: this.formBuilder.array(this.customerList.map(
            customer => this.formBuilder.group({
              id:0,
              title: this.formBuilder.control(customer.title),
              contactPerson: this.formBuilder.control(customer.contactPerson),
              responsiblePerson: ""
            })
          )) 


      })
  }

  createEditForm() {


  }
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
    return false;
  }

  submitOnEdit() {
    console.log(this.editCustomerForm);
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
