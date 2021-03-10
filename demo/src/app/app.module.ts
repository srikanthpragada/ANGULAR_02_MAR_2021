import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter/counter.service';
import { Counter2Component } from './counter/counter2.component';
 

@NgModule({
  declarations: [
       CounterComponent, Counter2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [CounterComponent, Counter2Component ]
})
export class AppModule { }
