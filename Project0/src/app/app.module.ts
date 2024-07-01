import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component'; 
import { ProductsComponent } from './products/products.component';
import { GamerzComponent } from './gamerz/gamerz.component';
import { FooterComponent } from './footer/footer.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { SiteMiddleComponent } from './site-middle/site-middle.component';
import { SiteBottomComponent } from './site-bottom/site-bottom.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    SearchComponent,  
    ProductsComponent,
    GamerzComponent,
    FooterComponent,
    NavTopComponent,
    SiteMiddleComponent,
    SiteBottomComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CartService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
