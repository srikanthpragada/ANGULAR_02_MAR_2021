import { Component } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'st-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
  employee : Employee;
  done: boolean = false;
  inprocess: boolean = false;
  added: boolean = false;

  constructor(private http: HttpClient) {
    this.employee = new Employee();
  }

  addEmployee() {
    // call restful service  
    this.done = false;
    this.added = false;
    this.inprocess = true;
    this.http.post("http://localhost:3000/employees", this.employee)
      .subscribe(result => {
        this.added = true;
        this.done = true;
        this.inprocess = false;
        console.log(result);
      },
        error => {
          this.added = false;
          this.done = true;
          this.inprocess = false;
          console.log(error)
        }
      );


  }


}