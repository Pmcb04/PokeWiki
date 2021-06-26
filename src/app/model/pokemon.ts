export class Pokemon {
    
    id: number;
    name: string; 
    front_sprite : string;

    constructor(id : number, name : string, front_sprite : string){
        this.id = id;
        this.name = name;
        this.front_sprite = front_sprite;
    } 
}
