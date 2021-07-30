
export class Move{

  public constructor(
    private _name : string,
    private _type : string,
    private _accuracy : number = 0,
    private _effect_chance : number = 0,
    private _pp : number = 0,
    private _priority : number = 0,
    private _power : number = 0,
    private _level_learned_at : number = 0
  ){};

  get name() : string{
    return this._name
  }

  get type() : string{
    return this._type;
  }

  get accuracy() : number{
    return this._accuracy
  }

  get effectChance() : number{
    return this._effect_chance
  }

  get pp() : number{
    return this._pp
  }

  get priority() : number{
    return this._priority
  }

  get power() : number{
    return this._power
  }

  get levelLearningAt() : number{
    return this._level_learned_at
  }

}


