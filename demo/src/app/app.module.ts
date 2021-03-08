import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
       BindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingsComponent ]
})
export class AppModule { }
