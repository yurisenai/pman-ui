export class Job {

    id: number;
    title: string;
    minSalary: number;
    maxSalary: number;
    employees: any[];

    constructor(id: number, title: string, minSalary: number,
        maxSalary: number, employees: any[]){
        this.id = id;
        this.title = title;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.employees = employees;
    }

}
