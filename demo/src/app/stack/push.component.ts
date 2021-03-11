import { Component, OnInit } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-push',
    templateUrl: './push.component.html'
})
export class PushComponent   {
    constructor(private stack : StackService) 
    { }

    pushValue(value) {
       this.stack.push(value)
    }
 
}

