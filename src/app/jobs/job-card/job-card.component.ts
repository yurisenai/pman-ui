import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { DataPassService } from '../../services/data-pass.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {

  constructor(private dataPassService: DataPassService){}

  @Input() job: Job = new Job(0,'',0,0,[])

  @Output() deleteJobEvent = new EventEmitter<number>();

  deleteThisJob(){
    console.log(this.job.id)
    this.deleteJobEvent.emit(this.job.id);

  }

}
