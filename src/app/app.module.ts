import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeBoxComponent } from './poke-box/poke-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PokeDetailsComponent,
    PokeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
