import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { Employee } from '../models/employee';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent {

  employees: Employee[] = [];

  constructor(private httpService: HttpService){
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.httpService.getAllEmployees().subscribe(response => {
      if (response && response.body) {
        this.employees = [];

        let body: any = response.body || {}
        for (let item of body) {
          this.employees.push(new Employee(item.id, item.firstname,
             item.lastName,item.email, item.phoneNumber,item.job,
             item.department, item.manager, item.salary, item.projects));
          
        }
      }
    });
  }

  getEmployeesById(id:number){
    this.httpService.getEmployeeById(id).subscribe(data=>{
      this.employees = [];
      console.log("Successful Get Employee: "+ id)
    });
  }

  createEmployee(){
    this.httpService.createEmployee().subscribe(data=>{
      this.getAllEmployees();
    });
  }

  updateEmployee(){
    this.httpService.updateEmployee();
  }

  deleteEmployee(id:number){
    this.httpService.deleteEmployee(id).subscribe(data=>{
      this.getAllEmployees();
    });
  }

  //this method runs for the card children buttons
  processDeleteEvent(id:number){
    console.log(id);
    this.deleteEmployee(id);
  }
}
