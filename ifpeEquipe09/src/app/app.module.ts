import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuilhermeMeloComponent } from './guilherme-melo/guilherme-melo.component';

@NgModule({
  declarations: [
    AppComponent,
    GuilhermeMeloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
