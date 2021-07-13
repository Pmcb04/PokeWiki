interface Stat{
  effort : number;
  base_stat : number;
}
export class Stats{
  private hp : Stat = {base_stat : 0, effort : 0};
  private speed : Stat = {base_stat : 0, effort : 0};
  private attack : Stat = {base_stat : 0, effort : 0};
  private defense : Stat = {base_stat : 0, effort : 0};
  private special_attack : Stat = {base_stat : 0, effort : 0};
  private special_defense : Stat = {base_stat : 0, effort : 0};

  getHp(){
    return this.hp
  }

  setHp(base_stat : number, effort : number){
    this.hp.base_stat = base_stat;
    this.hp.effort = effort;
  }

  getSpeed(){
    return this.speed
  }

  setSpeed(base_stat : number, effort : number){
    this.speed.base_stat = base_stat;
    this.speed.effort = effort;
  }

  getAttack(){
    return this.attack
  }

  setAttack(base_stat : number, effort : number){
    this.attack.base_stat = base_stat;
    this.attack.effort = effort;
  }

  getDefense(){
    return this.defense
  }

  setDefense(base_stat : number, effort : number){
    this.defense.base_stat = base_stat;
    this.defense.effort = effort;
  }

  getSpecialAttack(){
    return this.special_attack
  }

  setSpecialAttack(base_stat : number, effort : number){
    this.special_attack.base_stat = base_stat;
    this.special_attack.effort = effort;
  }

  getSpecialDefense(){
    return this.special_defense
  }

  setSpecialDefense(base_stat : number, effort : number){
    this.special_defense.base_stat = base_stat;
    this.special_defense.effort = effort;
  }

}
