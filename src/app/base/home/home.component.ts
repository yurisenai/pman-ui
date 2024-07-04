import { Component } from '@angular/core';
import { DepartmentCardComponent } from '../../departments/department-card/department-card.component';
import { Department } from '../../models/department';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DepartmentCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  favoriteDepartment: Department = new Department(1000, "Default",'Default',[]);

}
