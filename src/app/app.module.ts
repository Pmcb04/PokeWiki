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
import { HeaderComponent } from './components/header/header.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeItemsComponent } from './components/poke-items/poke-items.component';
import { PokeBerriesComponent } from './components/poke-berries/poke-berries.component';
import { NavegationBottomsComponent } from './components/navegation-bottoms/navegation-bottoms.component';

const routes: Routes = [
  { path : 'pokemon' , component : PokeViewComponent},
  { path : 'list' , component : PokeListComponent},
  { path : 'table' , component : PokeTableComponent},
  { path : 'items' , component : PokeItemsComponent},
  { path : 'berries' , component : PokeBerriesComponent},
  { path : '', component : HomeComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokePreviewComponent,
    PokeTypeComponent,
    PokeViewComponent,
    PageNotFoundComponent,
    HeaderComponent,
    PokeListComponent,
    HomeComponent,
    FooterComponent,
    PokeTableComponent,
    PokeItemsComponent,
    PokeBerriesComponent,
    NavegationBottomsComponent,
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
