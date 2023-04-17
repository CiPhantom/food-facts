import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SearchNameComponent } from './pages/search-name/search-name.component';
import { SimpleProductComponent } from './common/simple-product/simple-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { SubscriptionFormComponent } from './pages/subscribe/forms/subscription-form/subscription-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchNameComponent,
    SimpleProductComponent,
    ProductDetailsComponent,
    SubscribeComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
