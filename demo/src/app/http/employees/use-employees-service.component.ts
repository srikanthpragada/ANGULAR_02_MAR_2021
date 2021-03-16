import { Component, OnInit } from '@angular/core';
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
    constructor(private employeesService : EmployeesService) {
    }

    ngOnInit() {
        this.done = false;
        this.employeesService.getEmployees()
            .subscribe(
                 (result : Employee[]) => this.employees = result,
                 error => console.log(error),
                 () => this.done = true
                 );

    }
}