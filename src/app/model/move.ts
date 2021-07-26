
export class Move{

  public constructor(
    private name : string,
    private type : string,
    private accuracy : number = 0,
    private effect_chance : number = 0,
    private pp : number = 0,
    private priority : number = 0,
    private power : number = 0,
    private level_learned_at : number = 0
  ){};

  getName(){
    return this.name
  }

  getType(){
    return this.type;
  }

  getAccuracy(){
    return this.accuracy
  }

  getEffectChance(){
    return this.effect_chance
  }

  getPp(){
    return this.pp
  }

  getPriority(){
    return this.priority
  }

  getPower(){
    return this.power
  }

  getLevelLearningAt(){
    return this.level_learned_at
  }

}


