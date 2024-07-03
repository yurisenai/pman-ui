import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee';
import { DataPassService } from '../services/data-pass.service';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {

  constructor(private dataPassService: DataPassService){}

  @Input() employee: Employee = new Employee(0,'','',
    '','',[],[],'',0,[])

  @Output() deleteEmployeeEvent = new EventEmitter<number>();

  deleteThisEmployee(){
    console.log(this.employee.id)
    this.deleteEmployeeEvent.emit(this.employee.id);

  }

}
