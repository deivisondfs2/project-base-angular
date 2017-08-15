import { HeroesService } from './heroes/heroes.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRouterModule } from './heroes/heroes.router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
