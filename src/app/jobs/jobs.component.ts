import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobCardComponent } from './job-card/job-card.component';
import { HttpService } from '../services/http.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule,JobCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent {

  jobs: Job[] = [];

  constructor(private httpService: HttpService){
    this.getAllJobs();
  }

  getAllJobs(){
    this.httpService.getAllJobs().subscribe(response => {
      if (response && response.body) {
        this.jobs = [];

        let body: any = response.body || {}
        for (let item of body) {
          this.jobs.push(new Job(item.id,
             item.title, item.minSalary,item.maxSalary, item.employees));
          
        }
      }
    });
  }

  getJobById(id:number){
    this.httpService.getJobById(id).subscribe(data=>{
      this.jobs = [];
      console.log("Successful Get Job: "+ id)
    });
  }

  createJob(){
    this.httpService.createJob().subscribe(data=>{
      this.getAllJobs();
    });
  }

  updateJob(job:Job){
    this.httpService.updateJob(
      job.id,
      job.title,
      job.minSalary,
      job.maxSalary,
      job.employees
    ).subscribe(response => {
      this.getAllJobs();
    });
  }

  deleteJob(id:number){
    this.httpService.deleteJob(id).subscribe(data=>{
      this.getAllJobs();
    });
  }

  //this method runs for the card children buttons
  processDeleteEvent(jobId:number){
    console.log(jobId);
    this.deleteJob(jobId);
  }

}
