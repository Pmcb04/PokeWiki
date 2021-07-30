import { Stats } from "./stats";
import { Move } from "./move";
import { Sprites } from "./sprites"

export class Pokemon{

    public constructor(
      private _id? : number,
      private _name? : string,
      private _types? : string[],
      private _sprites? : Sprites,
      private _height? : number,
      private _weight? : number,
      private _stats? : Stats,
      private _moves? : Move[]
    ){};

    get id() : number{
      return this._id as number
    }

    get name() : string{
      return this._name as string
    }

    get types() : string[]{
      return this._types as string[]
    }

    get frontSpriteMale() : string{
      return this._sprites?.frontSpriteMale as string
    }

    get frontShinyMale() : string{
      return this._sprites?.frontShinyMale as string
    }

    get backSpriteMale() : string{
      return this._sprites?.backSpriteMale as string
    }

    get backShinyMale() : string{
      return this._sprites?.backShinyMale as string
    }

    get frontSpriteFemale() : string{
      return this._sprites?.frontSpriteFemale as string
    }

    get frontShinyFemale() : string{
      return this._sprites?.frontShinyFemale as string
    }

    get backSpriteFemale() : string{
      return this._sprites?.backSpriteFemale as string
    }

    get backShinyFemale() : string{
      return this._sprites?.backShinyFemale as string
    }

    getNewSprit(isShiny: boolean, isFemale: boolean, isBack: boolean): string {
      if(isBack){
        if(isShiny){
          if(isFemale){
            return this.backShinyFemale;
          }else{
            return this.backShinyMale;
          }
        }else{
          if(isFemale){
            return this.backSpriteFemale;
          }else{
            return this.backSpriteMale;
          }
        }
      }else{
        if(isShiny){
          if(isFemale){
            return this.frontShinyFemale;
          }else{
            return this.frontShinyMale;
          }
        }else{
          if(isFemale){
            return this.frontSpriteFemale;
          }else{
            return this.frontSpriteMale;
          }
        }
      }
    }

    get height() : number{
      return this._height as number;
    }

    get weight() : number{
      return this._weight as number;
    }

    get stats() : Stats{
      return this._stats as Stats;
    }

    get moves() : Move[]{
      return this._moves as Move[];
    }
}




