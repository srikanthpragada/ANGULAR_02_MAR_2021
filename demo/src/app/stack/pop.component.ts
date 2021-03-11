import { Component, OnInit } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-pop',
    templateUrl: './pop.component.html'
})
export class PopComponent   {
    value : string;
    constructor(private stack : StackService) 
    { }

    popValue() {
        if (this.stack.length() > 0)
            this.value = this.stack.pop().toString() 
        else
            this.value = "No value is available";
    }
 
}

