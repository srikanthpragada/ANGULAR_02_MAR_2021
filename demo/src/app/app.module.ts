import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RLoginComponent } from './forms/rlogin.component';

 
@NgModule({
  declarations: [
      RLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RLoginComponent]
})
export class AppModule { }
