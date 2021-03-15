import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './Employee';

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
        this.http.get<Employee[]>("http://localhost:3000/employees")
            .subscribe(
                 (result : Employee[]) => this.employees = result,
                 error => console.log(error),
                 () => this.done = true
                 );

    }
}