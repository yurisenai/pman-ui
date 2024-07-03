export class Department {
    id: number;
    name: string;
    location: String;
    employees: any[];

    constructor(id: number, name: string, location: string, employees: any[]){
        this.id = id;
        this.name = name;
        this.location = location;
        this.employees = employees;
    }
}
