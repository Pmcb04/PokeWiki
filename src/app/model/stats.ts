interface Stat{
  effort : number;
  base_stat : number;
}
export class Stats{

  private _hp : Stat = {base_stat : 0, effort : 0};
  private _speed : Stat = {base_stat : 0, effort : 0};
  private _attack : Stat = {base_stat : 0, effort : 0};
  private _defense : Stat = {base_stat : 0, effort : 0};
  private _special_attack : Stat = {base_stat : 0, effort : 0};
  private _special_defense : Stat = {base_stat : 0, effort : 0};

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
    this._special_attack.base_stat = stat.base_stat;
    this._special_attack.effort = stat.effort;
  }

}
