import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  isSaving:boolean = false;
  model: any = {};
  employeeForm: any = {}; 
    
  @Output() closeModal = new EventEmitter<boolean>();
  isModalOpen = true;

  constructor(private api:ApiService,
    private router: Router){}

  ngOnInit(){

  }

  async onSubmit(form: NgForm) {

    if (form.valid) {
await this.api.post("/employees",this.model)
      .then((data:any)=>{
        console.log("Added to database", data)
        this.isModalOpen = false; // Close the modal upon successful saving
        this.closeModal.emit(true);
      })
      .catch((err)=>{
        console.log("Error: ",err.statusText)
      })
      .finally(()=>{
        this.isSaving = false;
      });
     
    }
  }

  cancel(){
    this.isModalOpen = false; // Close the modal upon successful saving
    this.closeModal.emit(true);
  }
  


}
