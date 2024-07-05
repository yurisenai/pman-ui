import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../models/department';
import { DataPassService } from '../../services/data-pass.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-card.component.html',
  styleUrl: './department-card.component.css'
})
export class DepartmentCardComponent {
  editVisible: boolean = false;
  holderId: number = 0;
  holderName: string="";
  holderLocation: string="";

  constructor(){
    this.holderId=this.department.id;
    this.holderName=this.department.name;
    this.holderLocation=this.department.location;
  }

  @Input() department: Department = new Department(0,'','',[],[])
  @Output() deleteDepartmentEvent = new EventEmitter<number>();
  @Output() updateDepartmentEvent = new EventEmitter<Department>();
  @Output() viewDepartmentEvent = new EventEmitter<Department>();

  viewThisDepartment() {
    this.viewDepartmentEvent.emit(this.department);
    this.editVisible = !this.editVisible;
  }

  updateDepartment(){
    this.holderId = this.department.id;
    if (!this.holderName){this.holderName=this.department.name}
    if (!this.holderLocation){this.holderLocation=this.department.location}
    this.updateDepartmentEvent.emit(new Department(this.holderId,
      this.holderName, this.holderLocation,[],[]));
      this.editVisible = !this.editVisible;
  }

  deleteThisDepartment(){
    console.log(this.department.id)
    this.deleteDepartmentEvent.emit(this.department.id);

  }
}
