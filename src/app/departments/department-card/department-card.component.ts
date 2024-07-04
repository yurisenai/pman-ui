import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../models/department';
import { DataPassService } from '../../services/data-pass.service';

@Component({
  selector: 'app-department-card',
  standalone: true,
  imports: [],
  templateUrl: './department-card.component.html',
  styleUrl: './department-card.component.css'
})
export class DepartmentCardComponent {

  constructor(private dataPassService: DataPassService){}

  @Input() department: Department = new Department(0,'','',[])

  @Output() deleteDepartmentEvent = new EventEmitter<number>();

  deleteThisDepartment(){
    console.log(this.department.id)
    this.deleteDepartmentEvent.emit(this.department.id);

  }

}
