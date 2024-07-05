import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { Job } from '../models/job';
import { Project } from '../models/project';


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

  createDepartment() {
    return this.http.get(this.url + 'departments', { observe: 'response' }).pipe(
      switchMap(response => {
        const departments = response.body as any[];
        let highestId = 0;
        departments.forEach(dept => {
          if (dept.id > highestId) {
            highestId = dept.id;
          }
        });
        const newDepartment = {
          id: highestId + 1,
          name: "Name",
          location: "Location",
          employees: [],
          projects: []
        };
        return this.http.post(this.url + 'departments', newDepartment, { observe: 'response' });
      })
    );
  }

  updateDepartment(id: number, name: string, location: string, employees: any[]){

    return this.http.put(this.url + 'departments/'+ id,
       new Department(id, name, location, employees, []) , { observe: 'response' });
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

  createEmployee() {
    return this.http.get(this.url + 'employees', { observe: 'response' }).pipe(
      switchMap(response => {
        const employees = response.body as any[];
        let highestId = 0;
        employees.forEach(emp => {
          if (emp.id > highestId) {
            highestId = emp.id;
          }
        });
        const newEmployee = {
          id: highestId + 1,
          firstName: "First Name",
          lastName: "Last Name",
          email:"Email",
          phoneNumber:"Phone Number",
          salary:0,
          department: [],
          job: [],
          projects: []
        };
        return this.http.post(this.url + 'employees', newEmployee, { observe: 'response' });
      })
    );
  }

  updateEmployee(id: number, firstName: string, lastName: string, email:string, phoneNumber:string,jobId:number,
                  deptId: number, salary:number, projId:number) {
    return this.http.put(this.url + 'employees/' + id,
      new Employee(id, firstName, lastName,email,phoneNumber,
        new Job(jobId,'',0,0,[]), new Department(deptId,'','',[],[]), salary,
         new Project(projId,'','','','',[],new Department(0,'','',[],[]))), { observe: 'response' });
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url + 'employees/' + id,
                             {observe:'response'})
  }




    //JOBS
  getAllJobs(){
    return this.http.get(this.url + 'jobs', { observe : 'response'});
  }

  getJobById(id:number){
    return this.http.get(this.url + 'jobs/' + id, {observe:'response'})
  }

  createJob(){
    return this.http.post(this.url + 'jobs', {}, {observe:'response'})
  }

  updateJob(){
  let parameters = new HttpParams();
  parameters.set('id','25')
          .set('name','Test Put Department')

    return this.http.put(this.url + 'jobs', {employees: []}, {observe:'response',params:parameters})
  }

  deleteJob(id:number){
    return this.http.delete(this.url + 'jobs/' + id,
                            {observe:'response'})
  }



  //PROJECTS
  getAllProjects(){
    return this.http.get(this.url + 'projects', { observe : 'response'});
  }

  getProjectById(id:number){
    return this.http.get(this.url + 'projects/' + id, {observe:'response'})
  }

  createProject(){
    return this.http.post(this.url + 'projects', {}, {observe:'response'})
  }

  updateProject(){
  let parameters = new HttpParams();
  parameters.set('id','25')
          .set('name','Test Put projects')

    return this.http.put(this.url + 'projects', {employees: []}, {observe:'response',params:parameters})
  }

  deleteProject(id:number){
    return this.http.delete(this.url + 'projects/' + id,
                            {observe:'response'})
  }
}
