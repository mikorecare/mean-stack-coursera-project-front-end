import { Component, OnInit } from '@angular/core';
import { IEmployee, IList } from 'src/app/moduels/interface';
import { ApiService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isLoading = false;
  employees:any[] = []
  selectedEmployee!: IEmployee;
  constructor(private api:ApiService){}

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
    
    this.selectedEmployee = this.employees[index];
    console.log(this.selectedEmployee)
    
  }

}
