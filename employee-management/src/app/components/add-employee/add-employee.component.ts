import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  model: any = {};
  employeeForm: any = {}; 

  constructor(private api:ApiService){}

  ngOnInit(){

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Access form values via ngModel bindings
    console.log(this.model)
  
      // You can perform additional logic here
    }
  }
  


}
