export class Employee {
    id: number;
    firstName: string;
    lastName: String;
    email: String;
    phoneNumber: String;
    job:any[];
    department:any[];
    manager:string;
    salary:number;
    projects:any[];

    constructor(id: number, firstName: string, lastName: string,
        email: string, phoneNumber: string, job: any[],department: any[],
        manager:string, salary:number, projects: any[]){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.job = job[1];
        this.department = department[1];
        this.manager = manager;
        this.salary = salary;
        this.projects = projects[1];
    }
}
