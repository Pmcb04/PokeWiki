export class Sprites {

  constructor(
    private front_sprite_male : string,
    private front_shiny_male : string,
    private back_sprite_male : string,
    private back_shiny_male : string,

    private front_sprite_female : string,
    private front_shiny_female : string,
    private back_sprite_female : string,
    private back_shiny_female : string,

  ){ }

  getFrontSpriteMale() : string{
    return this.front_sprite_male as string
  }

  getFrontShinyMale() : string{
    return this.front_shiny_male as string
  }

  getBackSpriteMale() : string{
    return this.back_sprite_male as string
  }

  getBackShinyMale() : string{
    return this.back_shiny_male as string
  }


  getFrontSpriteFemale() : string{
    return this.front_sprite_female as string
  }

  getFrontShinyFemale() : string{
    return this.front_shiny_female as string
  }

  getBackSpriteFemale() : string{
    return this.back_sprite_female as string
  }

  getBackShinyFemale() : string{
    return this.back_shiny_female as string
  }

}
