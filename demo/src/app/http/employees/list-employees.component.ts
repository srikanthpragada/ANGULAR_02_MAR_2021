import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './Employee';
import { EmployeeUtil } from './EmployeeUtil';

@Component({
    selector: 'st-employees',
    templateUrl: './list-employees.component.html'
})
export class ListEmployeesComponent implements OnInit {
    employees : Employee[];
    done : boolean = false;
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.done = false;
        this.http.get<Employee[]>(EmployeeUtil.URL)
            .subscribe(
                 (result : Employee[]) => this.employees = result,
                 error => {
                     console.log(error);
                     this.done = true;
                 },
                 () => this.done = true
                 );

    }
}