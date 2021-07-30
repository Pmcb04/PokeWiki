export class Item {
  constructor(
    private _name : string,
    private _sprit : string,
    private _cost : number,
    private _category : string
  ){ }

  get name() : string{
    return this._name;
  }

  get sprit() : string{
    return this._sprit;
  }

  get cost() : number {
    return this._cost;
  }

  get category() : string {
    return this._category;
  }

}
