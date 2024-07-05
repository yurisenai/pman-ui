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

  createJob() {
    return this.http.get(this.url + 'jobs', { observe: 'response' }).pipe(
      switchMap(response => {
        const jobs = response.body as any[];
        let highestId = 0;
        jobs.forEach(job => {
          if (job.id > highestId) {
            highestId = job.id;
          }
        });
        const newJob = {
          id: highestId + 1,
          title: "New",
          minSalary: 0,
          maxSalary: 0,
          employees: []
        };
        return this.http.post(this.url + 'jobs', newJob, { observe: 'response' });
      })
    );
  }

  updateJob(id: number, title: string, minSalary: number, maxSalary: number, employees: any[]) {
    return this.http.put(this.url + 'jobs/' + id,
      new Job(id, title, minSalary, maxSalary, employees), { observe: 'response' });
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

  createProject() {
    return this.http.get(this.url + 'projects', { observe: 'response' }).pipe(
      switchMap(response => {
        const projects = response.body as any[];
        let highestId = 0;
        projects.forEach(project => {
          if (project.id > highestId) {
            highestId = project.id;
          }
        });
        const newProject = {
          id: highestId + 1,
          name: "New Project",
          description: "New Project Description",
          department: null,
          employees: []
        };
        return this.http.post(this.url + 'projects', newProject, { observe: 'response' });
      })
    );
  }

  updateProject(id: number, name: string, description: string, startDate: string, endDate: string, deptId:number,employees:any[]) {
    return this.http.put(this.url + 'projects/' + id,
      new Project(id, name, description,startDate,endDate, employees, new Department(deptId,'','',[],[])), { observe: 'response' });
  }

  deleteProject(id:number){
    return this.http.delete(this.url + 'projects/' + id,
                            {observe:'response'})
  }
}
