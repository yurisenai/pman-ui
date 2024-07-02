import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  url: String = 'http://localhost:8080/'

  getAllDepartments(){
    console.log("test");
    return this.http.get(this.url + 'departments', { observe : 'response'});
  }

  getDepartmentById(){
    return this.http.get(this.url + 'departments/' + 30, {observe:'response'})
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

  deleteDepartment(departmentId:number){
    return this.http.delete(this.url + 'departments/' + departmentId,
                             {observe:'response'})
  }
}
