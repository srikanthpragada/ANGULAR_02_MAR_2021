import { Component} from '@angular/core';
import { Player } from './Player';

@Component({
    selector: 'st-team',
    templateUrl: './team.component.html',
})
export class TeamComponent {
    message : string = '';
    teamname : string = "Real Madrid"
    players : Player[] = [ new Player("Ronaldo",28), new Player("Rahul",30),
                           new Player("Carlos",31)];

    constructor() { }
  

    addPlayer(name : string, age :number) {
        this.message = "";
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

        this.players.push( new Player(name,age))
    }

    deletePlayer(idx:number) {
        this.players.splice(idx,1)
    }
     
}
