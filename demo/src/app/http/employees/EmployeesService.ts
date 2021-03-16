import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Employee } from "./employee";
import { EmployeeUtil } from "./EmployeeUtil";

@Injectable()
export class EmployeesService {
    constructor(private http: HttpClient) {
    }

    getEmployees() : Observable<Employee[]>
    {
        return this.http.get<Employee[]>(EmployeeUtil.URL) 
                .pipe(
                   map((employees : Employee[]) => employees.slice(0,5)) 
                );
    }

    getEmployee(id : number) : Observable<Employee>
    {
        return this.http.get<Employee>(EmployeeUtil.URL + "/" + id);
    }
    
    
}