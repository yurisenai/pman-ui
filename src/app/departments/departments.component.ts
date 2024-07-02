import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';
import { Department } from '../models/department';
import { DepartmentCardComponent } from '../department-card/department-card.component';


@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule,DepartmentCardComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})


export class DepartmentsComponent {

  departments: Department[] = [];

  constructor(private httpService: HttpService){
    this.getAllDepartments();
  }

  getAllDepartments(){
    this.httpService.getAllDepartments().subscribe(response => {
      if (response && response.body) {
        this.departments = [];

        let body: any = response.body || {}
        for (let item of body) {
          this.departments.push(new Department(item.id, item.name, item.employees));
          
        }
      }
    });
  }

  getDepartmentById(){
    this.httpService.getDepartmentById();
  }

  createDepartment(){
    this.httpService.createDepartment().subscribe(data=>{
      this.getAllDepartments();
    });
  }

  updateDepartment(){
    this.httpService.updateDepartment();
  }

  deleteDepartment(departmentId:number){
    this.httpService.deleteDepartment(departmentId).subscribe(data=>{
      this.getAllDepartments();
    });
  }

  //this method runs for the card children buttons
  processDeleteEvent(departmentId:number){
    console.log(departmentId);
    this.deleteDepartment(departmentId);
  }

}
