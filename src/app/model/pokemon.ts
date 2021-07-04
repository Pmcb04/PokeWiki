export class Pokemon {

    id: number;
    name: string;
    front_sprite : string;
    types : string[];

    constructor(id : number, name : string, front_sprite : string, types : string[]){
        this.id = id;
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.front_sprite = front_sprite;
        this.types = types;
    }
}
