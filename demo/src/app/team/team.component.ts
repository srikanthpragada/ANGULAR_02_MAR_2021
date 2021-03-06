import { Component} from '@angular/core';
import { Player } from './Player';

@Component({
    selector: 'st-team',
    templateUrl: './team.component.html',
})
export class TeamComponent {

    teamname : string = "Real Madrid"
    players : Player[] = [ new Player("Ronaldo",28), new Player("Rahul",30),
                           new Player("Carlos",31)];

    constructor() { }

    addPlayer(name : string, age :number) {
        this.players.push( new Player(name,age))
    }

    deletePlayer(idx:number) {
        this.players.splice(idx,1)
    }
     
}
