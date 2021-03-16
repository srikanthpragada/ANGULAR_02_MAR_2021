import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from './Country';

@Component({
    selector: 'st-region-countries',
    templateUrl: './region-countries.component.html',
    
})
export class RegionCountriesComponent implements OnInit {
    regions   : string [] = [];
    countries : Country[] = [];
    selectedCountries : Country[] = null;

    constructor(private http : HttpClient) { 
    }

    ngOnInit(): void { 
       // get all country details 
       this.http.get<Country[]>("https://restcountries.eu/rest/v2/all")
          .subscribe(
             (result) =>  {
                 this.countries = result;
                 // copy unique regions into array
                 this.countries.forEach(c => {
                     if (!this.regions.includes(c.region))
                          this.regions.push(c.region)
                 })
             } // next()
   
          ); // subscribe()
          
    }

    getCountriesByRegion(region:string) {
        this.selectedCountries = [];  // clear 
        this.countries.forEach(c => {
            if (c.region == region) 
                  this.selectedCountries.push(c);
        })

        // console.log(this.selectedCountries)
    }


}
