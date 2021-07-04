import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PokemonService } from './services/pokemon-service.service';
import { PokePreviewComponent } from './components/poke-preview/poke-preview.component';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';

const routes: Routes = [
  { path : '', component : AppComponent},
  { path : 'name' , component : PokeViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PokePreviewComponent,
    PokeTypeComponent,
    PokeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
