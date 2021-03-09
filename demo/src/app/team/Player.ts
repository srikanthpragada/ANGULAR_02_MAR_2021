export class Player {
    name : string;
    age : number;
    position: string;
    constructor(name : string, age : number, position : string = "") {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}