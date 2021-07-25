import { Stats } from "./stats";
import { Move } from "./move";
import { Sprites } from "./sprites";

export class Pokemon{

    public constructor(
      private id? : number,
      private name? : string,
      private types? : string[],
      private sprites? : Sprites,
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

    getFrontSpriteMale() : string{
      return this.sprites?.getFrontSpriteMale() as string
    }

    getFrontShinyMale() : string{
      return this.sprites?.getFrontShinyMale() as string
    }

    getBackSpriteMale() : string{
      return this.sprites?.getBackSpriteMale() as string
    }

    getBackShinyMale() : string{
      return this.sprites?.getBackShinyMale() as string
    }

    getFrontSpriteFemale() : string{
      return this.sprites?.getFrontSpriteFemale() as string
    }

    getFrontShinyFemale() : string{
      return this.sprites?.getFrontShinyFemale() as string
    }

    getBackSpriteFemale() : string{
      return this.sprites?.getBackSpriteFemale() as string
    }

    getBackShinyFemale() : string{
      return this.sprites?.getBackShinyFemale() as string
    }

    getNewSprit(isShiny: boolean, isFemale: boolean, isBack: boolean): string {
      if(isBack){
        if(isShiny){
          if(isFemale){
            return this.getBackShinyFemale();
          }else{
            return this.getBackShinyMale();
          }
        }else{
          if(isFemale){
            return this.getBackSpriteFemale();
          }else{
            return this.getBackSpriteMale();
          }
        }
      }else{
        if(isShiny){
          if(isFemale){
            return this.getFrontShinyFemale();
          }else{
            return this.getFrontShinyMale();
          }
        }else{
          if(isFemale){
            return this.getFrontSpriteFemale();
          }else{
            return this.getFrontSpriteMale();
          }
        }
      }
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




