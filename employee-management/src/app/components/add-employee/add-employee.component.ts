import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  isSaving:boolean = false;
  model: any = {};
  employeeForm: any = {}; 

  constructor(private api:ApiService){}

  ngOnInit(){

  }

  async onSubmit(form: NgForm) {
    this.isSaving = true;
    if (form.valid) {
    const post =  await this.api.post("/employees",this.model)
      .then((data:any)=>{
        console.log("Added to database", data)
      })
      .catch((err)=>{
        console.log("Error: ",err.statusText)
      })
      .finally(()=>{
        this.isSaving = false;
      });
     
    }
    
  }
  


}
