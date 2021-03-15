import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CountryinfoComponent } from './http/countryinfo/countryinfo.component';

@NgModule({
  declarations: [
      CountryinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CountryinfoComponent]
})
export class AppModule { }
