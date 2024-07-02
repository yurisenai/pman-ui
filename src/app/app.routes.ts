import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'departments',
        component: DepartmentsComponent
    },
];
