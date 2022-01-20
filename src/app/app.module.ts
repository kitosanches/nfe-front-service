import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArquivoXmlModule } from './arquivo-xml/arquivo-xml.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArquivoXmlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
