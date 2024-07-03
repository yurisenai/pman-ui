import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  url: String = 'http://localhost:8080/'


  //DEPARTMENTS
  getAllDepartments(){
    return this.http.get(this.url + 'departments', { observe : 'response'});
  }

  getDepartmentById(id:number){
    return this.http.get(this.url + 'departments/' + id, {observe:'response'})
  }

  createDepartment(){
    return this.http.post(this.url + 'departments', {}, {observe:'response'})
  }

  updateDepartment(){
let parameters = new HttpParams();
parameters.set('id','25')
          .set('name','Test Put Department')

    return this.http.put(this.url + 'departments', {employees: []}, {observe:'response',params:parameters})
  }

  deleteDepartment(id:number){
    return this.http.delete(this.url + 'departments/' + id,
                             {observe:'response'})
  }



  //EMPLOYEES
  getAllEmployees(){
    return this.http.get(this.url + 'employees', { observe : 'response'});
  }

  getEmployeeById(id:number){
    return this.http.get(this.url + 'employees/' + id, {observe:'response'})
  }

  createEmployee(){
    return this.http.post(this.url + 'employees', {}, {observe:'response'})
  }

  updateEmployee(){
let parameters = new HttpParams();
parameters.set('id','25')
          .set('name','Test Put Department')

    return this.http.put(this.url + 'employees', {employees: []}, {observe:'response',params:parameters})
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url + 'employees/' + id,
                             {observe:'response'})
  }
}
