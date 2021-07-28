export class PokemonChain{
  constructor(
    private id : number,
    private name : string,
    private sprit : string
  ){}

  getID() : number{
    return this.id;
  }

  getName() : string{
    return this.name;
  }

  getSprit() : string{
    return this.sprit;
  }

}

export class EvolutionChain {

  private chain : PokemonChain[] = []
  private numberPokemon : number = 0;

  add(pokemon : PokemonChain){
    this.chain.push(pokemon);
    this.numberPokemon++;
  }

  length() : number{
    return this.numberPokemon;
  }

  get(index : number) : PokemonChain{
    return this.chain[index];
  }

  getPokemon() : PokemonChain[]{
    return this.chain;
  }

  getPokemonOrderByID() : PokemonChain[]{
    return this.chain.sort((a,b) => (a.getID() > b.getID()) ? 1 : ((b.getID() > a.getID()) ? -1 : 0));
  }

}
