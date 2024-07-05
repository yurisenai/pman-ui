export class Department {
    id: number;
    name: string;
    location: string;
    employees: any[];
    projects: any[];

    constructor(id: number, name: string, location: string, employees: any[], projects: any[]){
        this.id = id;
        this.name = name;
        this.location = location;
        this.employees = employees;
        this.projects = projects;
    }
}
