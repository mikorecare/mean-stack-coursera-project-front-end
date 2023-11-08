import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee, IList } from 'src/app/moduels/interface';
import { ApiService } from 'src/app/services/api-service.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import * as $ from 'jquery';
import 'bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedIndex:number = 0;
  isLoading = false;
  employees:any[] = []
  selectedEmployee!: IEmployee;
  @ViewChild('childComponent') childComponent!: AddEmployeeComponent;

  constructor(private api:ApiService,
    private router:Router
    ){}

  ngOnInit(): void{
    this.getEmployees()
  }

  

  async getEmployees(){
    this.isLoading = true
    await this.api.get("/employees").then((data:any)=>{
      console.log(data)
        this.employees = data;    
    }).catch((error:any)=>{
      console.log(error)
    }).finally(()=>this.isLoading=false);
  }

  setSelectedEmployee(index:number){
    this.selectedIndex = index;
    this.selectedEmployee = this.employees[index];
    console.log(this.selectedEmployee)  
  }

  goTo(url:string){
    this.router.navigate([`home/${url}`])
  }

  handleCloseModal() {
    const modal = document.getElementById('addModal');
    if (modal) {
      modal.style.display = 'none';
      $(".modal-backdrop").remove();
  
      // Remove the modal-open class from the body
      $("body").removeClass("modal-open");
      this.router.navigate(['/home/dashboard'])

    }
  }
}
