import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  @Input() id:string = "";  
  @Output() closeModal = new EventEmitter<boolean>();
  isModalOpen = true;

  constructor(private api:ApiService,
    private router: Router){}

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['id'] && changes['id'].currentValue) {
        this.getEmployeeById(changes['id'].currentValue);
      }
    }

  async getEmployeeById(id:string){

      this.api.get(`/employees/${id}`)
      .then((data:any)=>{
        this.model = data
      })
    
  }
  async onSubmit(form: NgForm) {

    if (form.valid) {
      await this.api.post("/employees",this.model)
      .then((data:any)=>{
        console.log("Added to database", data)
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
    this.closeModal.emit(true);
  }
  


}
