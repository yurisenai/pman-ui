import { Component } from '@angular/core';
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [];

  constructor(private httpService: HttpService){
    this.getAllProjects();
  }

  getAllProjects(){
    this.httpService.getAllProjects().subscribe(response => {
      if (response && response.body) {
        this.projects = [];

        let body: any = response.body || {}
        for (let item of body) {
          this.projects.push(new Project(item.id, item.name,
            item.description,item.startDate,item.endDate, 
            item.employees, item.department));
          
        }
      }
    });
  }

  getProjectsById(id:number){
    this.httpService.getProjectById(id).subscribe(data=>{
      this.projects = [];
      console.log("Successful Get Projects: "+ id)
    });
  }

  createProject(){
    this.httpService.createProject().subscribe(data=>{
      this.getAllProjects();
    });
  }

  updateProject(project:Project){
    this.httpService.updateProject(
      project.id,
      project.name,
      project.description,
      project.startDate,
      project.endDate,
      project.department.id,
      project.employees).subscribe(response => {
      this.getAllProjects();
    });
  }

  deleteProject(id:number){
    this.httpService.deleteProject(id).subscribe(data=>{
      this.getAllProjects();
    });
  }

  //this method runs for the card children buttons
  processDeleteEvent(id:number){
    console.log(id);
    this.deleteProject(id);
  }


}
