import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  employeeCount: number = 0;
  departmentCount: number = 0;
  projectCount: number = 0;
  employeeProgress: number = 0;
  departmentProgress: number = 0;
  projectProgress: number = 0;
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
  
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchCounts();
  }

  fetchCounts(): void {
    this.httpService.getAllEmployees().subscribe(response => {
      const employees = response.body as any[]; // Cast response.body to an array
      this.employeeCount = employees.length;
      this.employeeProgress = this.calculateProgress(this.employeeCount);
    });
    this.httpService.getAllDepartments().subscribe(response => {
      const departments = response.body as any[]; // Cast response.body to an array
      this.departmentCount = departments.length;
      this.departmentProgress = this.calculateProgress(this.departmentCount);
    });
    this.httpService.getAllProjects().subscribe(response => {
      const projects = response.body as any[]; // Cast response.body to an array
      this.projectCount = projects.length;
      this.projectProgress = this.calculateProgress(this.projectCount);
    });
  }

  calculateProgress(count: number): number {
    const max = 100; // You can adjust this based on your needs
    return (count / max) * 100;
  }
}