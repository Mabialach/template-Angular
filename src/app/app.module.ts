import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
