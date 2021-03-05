import { Component } from '@angular/core';

@Component({
  selector: 'st-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {

  title : string = ""
  constructor() { }

  wish(uname : string) {
    this.title = "";
    if(uname.length == 0)
    {
      alert("Please enter your name!")
      return;
    }

    this.title = `Hello ${uname}`;
  }
}
