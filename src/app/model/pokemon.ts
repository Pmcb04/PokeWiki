export class Pokemon{

    public constructor(
      private id : number,
      private name : string,
      private front_sprite : string,
      private types : string[],
      private stats? : Stats
    ){};

    getID() : number{
      return this.id
    }

    getName() : string{
      return this.name
    }

    getFrontSprite() : string{
      return this.front_sprite
    }

    getTypes() : string[]{
      return this.types
    }

    getStats() : Stats{
      return this.stats as Stats;
    }
}

export class Stats{
  hp : Stat = {base_stat : 0, effort : 0};
  speed : Stat = {base_stat : 0, effort : 0};
  attack : Stat = {base_stat : 0, effort : 0};
  defense : Stat = {base_stat : 0, effort : 0};
  special_attack : Stat = {base_stat : 0, effort : 0};
  special_defense : Stat = {base_stat : 0, effort : 0};
}

interface Stat{
  effort : number;
  base_stat : number;
}
