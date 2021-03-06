import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
       TeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TeamComponent ]
})
export class AppModule { }
