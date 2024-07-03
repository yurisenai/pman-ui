import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  constructor() { }

  favoriteDepartment: Department = new Department(0,'','',[]);

  faveDeptSubject = new BehaviorSubject<Department>(this.favoriteDepartment);

  faveDeptObservable = this.faveDeptSubject.asObservable();

  updateFavoriteDepartment(department:Department){
    this.favoriteDepartment = department;
    
    this.faveDeptSubject.next(this.favoriteDepartment);
  }
}
