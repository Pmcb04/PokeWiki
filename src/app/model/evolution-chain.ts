export class PokemonChain{
  constructor(
    private _id : number,
    private _name : string,
    private _sprit : string
  ){}

  get id() : number{
    return this._id;
  }

  get name() : string{
    return this._name;
  }

  get sprit() : string{
    return this._sprit;
  }

}

export class EvolutionChain {

  private chain : PokemonChain[] = []
  private numberPokemon : number = 0;

  add(pokemon : PokemonChain){
    this.chain.push(pokemon);
    this.numberPokemon++;
  }

  get(index : number) : PokemonChain{
    return this.chain[index];
  }

  get length() : number{
    return this.numberPokemon;
  }

  get pokemon() : PokemonChain[]{
    return this.chain;
  }

  get pokemonOrderByID() : PokemonChain[]{
    return this.chain.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  }

}
