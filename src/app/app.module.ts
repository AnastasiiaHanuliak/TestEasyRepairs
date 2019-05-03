import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FilterComponent } from './filter/filter.component';
import { BanerComponent } from './baner/baner.component';
import { QuoteComponent } from './quote/quote.component';
import { BannerComponent } from './banner/banner.component';
import { SpGeneralComponent } from './sp-general/sp-general.component';
import { NewHeaderComponent } from './new-header/new-header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationtionComponent } from './paginationtion/paginationtion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FilterComponent,
    BanerComponent,
    QuoteComponent,
    BannerComponent,
    SpGeneralComponent,
    NewHeaderComponent,
    FooterComponent,
    PaginationtionComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
