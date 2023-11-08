import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  model: any = {};

  constructor(private api:ApiService){}

  ngOnInit(){

  }

  onSubmit(){
    
  }
  


}
