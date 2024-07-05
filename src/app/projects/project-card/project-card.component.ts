import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project';
import { DataPassService } from '../../services/data-pass.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  constructor(private dataPassService: DataPassService){}

  @Input() project: Project = new Project(0,'','','','',[],new Department(0,'','',[],[]))

  @Output() deleteProjectEvent = new EventEmitter<number>();

  deleteThisProject(){
    console.log(this.project.id)
    this.deleteProjectEvent.emit(this.project.id);

  }

}
