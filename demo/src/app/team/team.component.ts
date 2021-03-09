import { Component} from '@angular/core';
import { Player } from './Player';

@Component({
    selector: 'st-team',
    templateUrl: './team.component.html',
})
export class TeamComponent {
    message : string = '';
    teamname : string = "Real Madrid"
    players : Player[] = [ new Player("Ronaldo",28,"Forward"),
                           new Player("Rahul",30,"Forward"),
                           new Player("Carlos",31,"Defender")];

    constructor() {
        console.log(this.players)
     }  
  
    addPlayer(name : string, age :number, position : string = "") {
        this.message = "";
        if(position == "Select Position")
        {
            this.message = "Please select position";
            return;
        }

        // Check whether player is already present
        if (this.players.some(p => p.name == name))
        {
            this.message = "Name is already present!";
            return;
        } 

        if(age < 15 || age > 60)
        {
            this.message = "Sorry! Invalid Age!";
            return;
        }

        this.players.push( new Player(name,age, position))
    }

    deletePlayer(idx:number) {
        this.players.splice(idx,1)
    }
     
}
