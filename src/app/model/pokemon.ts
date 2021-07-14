import { Stats } from "./stats";
import { Move } from "./move";

export class Pokemon{

    public constructor(
      private id? : number,
      private name? : string,
      private types? : string[],
      private front_sprite? : string,
      private front_shiny? : string,
      private height? : number,
      private weight? : number,
      private stats? : Stats,
      private moves? : Move[]
    ){};

    getID() : number{
      return this.id as number
    }

    getName() : string{
      return this.name as string
    }

    getTypes() : string[]{
      return this.types as string[]
    }

    getFrontSprite() : string{
      return this.front_sprite as string
    }

    getFrontShiny() : string{
      return this.front_shiny as string
    }

    getHeight() : number{
      return this.height as number;
    }

    getWeight() : number{
      return this.weight as number;
    }

    getStats() : Stats{
      return this.stats as Stats;
    }

    getMoves() : Move[]{
      return this.moves as Move[]
    }
}




