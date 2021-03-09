import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BracketsPipe } from './pipes/brackets.pipe';
import { PipesDemoComponent } from './pipes/pipesdemo.component';

@NgModule({
  declarations: [
       PipesDemoComponent, BracketsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent ]
})
export class AppModule { }
