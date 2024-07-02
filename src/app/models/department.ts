export class Department {
    departmentId: number;
    departmentName: string;
    employees: any[];

    constructor(id: number, name: string, employees: any[]){
        this.departmentId = id;
        this.departmentName = name;
        this.employees = employees;
    }
}
