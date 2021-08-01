export class Stat{
  constructor(private _base_stat? : number, private _effort? : number){ }

  get base_stat() : number{
    return this._base_stat as number;
  }

  set base_stat(number : number){
    this._base_stat = number;
  }

  get effort() : number{
    return this._effort as number;
  }

  set effort(number : number){
    this._effort = number;
  }

}
export class Stats{

  private _hp : Stat = new Stat();
  private _speed : Stat = new Stat();
  private _attack : Stat = new Stat();
  private _defense : Stat = new Stat();
  private _special_attack : Stat = new Stat();
  private _special_defense : Stat = new Stat();

  get hp() : Stat{
    return this._hp;
  }

  set hp(stat : Stat){
    this._hp.base_stat = stat.base_stat;
    this._hp.effort = stat.effort;
  }

  get speed() : Stat{
    return this._speed;
  }

  set speed(stat : Stat){
    this._speed.base_stat = stat.base_stat;
    this._speed.effort = stat.effort;
  }

  get attack() : Stat{
    return this._attack;
  }

  set attack(stat : Stat){
    this._attack.base_stat = stat.base_stat;
    this._attack.effort = stat.effort;
  }

  get defense() : Stat{
    return this._defense;
  }

  set defense(stat : Stat){
    this._defense.base_stat = stat.base_stat;
    this._defense.effort = stat.effort;
  }

  get special_attack() : Stat{
    return this._special_attack;
  }

  set special_attack(stat : Stat){
    this._special_attack.base_stat = stat.base_stat;
    this._special_attack.effort = stat.effort;
  }

  get special_defense() : Stat{
    return this._special_defense;
  }

  set special_defense(stat : Stat){
    this._special_defense.base_stat = stat.base_stat;
    this._special_defense.effort = stat.effort;
  }

}
