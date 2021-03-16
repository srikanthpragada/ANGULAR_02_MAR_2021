import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegionCountriesComponent } from './countries_by_region/region-countries.component';

@NgModule({
  declarations: [
       RegionCountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RegionCountriesComponent]
})
export class AppModule { }
