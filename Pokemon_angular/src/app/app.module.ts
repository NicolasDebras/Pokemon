import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FightActionComponent } from './fight-action/fight-action.component';
import { PokemonFightComponent } from './pokemon-fight/pokemon-fight.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FightActionComponent,
    PokemonFightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
