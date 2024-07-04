import { Routes } from '@angular/router';
import { HomeComponent } from './base/home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './base/settings/settings.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'departments',
        component: DepartmentsComponent
    },
    {
        path:'employees',
        component: EmployeesComponent
    },
    {
        path:'jobs',
        component: JobsComponent
    },
    {
        path:'settings',
        component: SettingsComponent
    },
    {
        path:'projects',
        component: ProjectsComponent
    },
];
