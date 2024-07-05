import { Department } from "./department";

export class Project {

    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    department:Department;
    employees:any[];
    

    constructor(id: number, name: string, description: string,
        startDate: string, endDate: string, employees: any[],
        department: Department){
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.employees = employees;
        this.department = department;
    }

}
