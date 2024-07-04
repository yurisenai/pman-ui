export class Project {

    id: number;
    name: string;
    description: String;
    startDate: String;
    endDate: String;
    department:any[];
    employees:any[];
    

    constructor(id: number, name: string, description: string,
        startDate: string, endDate: string, employees: any[],
        department: any[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.employees = employees;
        this.department = department;
    }

}
