export class Sprites {

  constructor(
    private _front_sprite_male : string,
    private _front_shiny_male : string,
    private _back_sprite_male : string,
    private _back_shiny_male : string,

    private _front_sprite_female : string,
    private _front_shiny_female : string,
    private _back_sprite_female : string,
    private _back_shiny_female : string,

  ){ }

  get frontSpriteMale() : string{
    return this._front_sprite_male as string
  }

  get frontShinyMale() : string{
    return this._front_shiny_male as string
  }

  get backSpriteMale() : string{
    return this._back_sprite_male as string
  }

  get backShinyMale() : string{
    return this._back_shiny_male as string
  }


  get frontSpriteFemale() : string{
    return this._front_sprite_female as string
  }

  get frontShinyFemale() : string{
    return this._front_shiny_female as string
  }

  get backSpriteFemale() : string{
    return this._back_sprite_female as string
  }

  get backShinyFemale() : string{
    return this._back_shiny_female as string
  }

}
