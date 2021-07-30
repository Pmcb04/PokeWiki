export class Berry {

  constructor(
    private _name : string,
    private _sprit : string,
    private _growth_time : number,
    private _max_harvest : number,
    private _natural_gift_power : number,
    private _size : number,
    private _natural_gift_type : string
  ){ }

  get name() : string{
    return this._name;
  }

  get sprit() : string{
    return this._sprit;
  }

  get growth_time() : number{
    return this._growth_time;
  }

  get max_harvest() : number {
    return this._max_harvest;
  }

  get natural_gift_power() : number {
    return this._natural_gift_power;
  }

  get size() : number {
    return this._size;
  }

  get natural_gift_type() : string {
    return this._natural_gift_type;
  }



}
