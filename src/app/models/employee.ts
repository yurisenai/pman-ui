import { Department } from "./department";
import { Job } from "./job";
import { Project } from "./project";

export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    job:Job;
    department: Department;
    salary:number;
    projects: Project;

    constructor(id: number, firstName: string, lastName: string,
        email: string, phoneNumber: string, job: Job,department: Department,
        salary:number, projects: Project){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.job = job;
        this.department = department;
        this.salary = salary;
        this.projects = projects;
    }
}
