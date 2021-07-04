import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PokemonService } from './services/pokemon-service.service';
import { PokePreviewComponent } from './components/poke-preview/poke-preview.component';
import { PokeViewComponent } from './components/poke-view/poke-view.component';
import { PokeTypeComponent } from './components/poke-type/poke-type.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'name/:name' , component : PokeViewComponent},
  { path : '', component : AppComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokePreviewComponent,
    PokeTypeComponent,
    PokeViewComponent,
    PageNotFoundComponent
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
