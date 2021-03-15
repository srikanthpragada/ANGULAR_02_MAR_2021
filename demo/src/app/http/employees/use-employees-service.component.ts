import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './Employee';
import { EmployeesService } from './EmployeesService';

@Component({
    selector: 'st-employees',
    templateUrl: './list-employees.component.html',
    providers : [EmployeesService]
    
})
export class UseEmployeesServiceComponent implements OnInit {
    employees : Employee[];
    done : boolean = false;
    constructor(private employeeService : EmployeesService) {
    }

    ngOnInit() {
        this.done = false;
        this.employeeService.getEmployees()
            .subscribe(
                 (result : Employee[]) => this.employees = result,
                 error => console.log(error),
                 () => this.done = true
                 );

    }
}