import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroModule } from './heros/components/hero.module';
import { ListComponent } from './heros/components/list/list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
