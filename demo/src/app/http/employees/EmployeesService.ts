import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Employee } from "./employee";

@Injectable()
export class EmployeesService {
    URL : string = "http://localhost:3000/employees";
    
    constructor(private http: HttpClient) {
    }

    getEmployees() : Observable<Employee[]>
    {
        return this.http.get<Employee[]>(this.URL) 
                .pipe(
                   map((employees : Employee[]) => employees.slice(0,5)) 
                );
    }

    getEmployee(id : number) : Observable<Employee>
    {
        return this.http.get<Employee>(this.URL + "/" + id);
    }
    
    
}