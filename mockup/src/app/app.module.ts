import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './split/navigation-bar/navigation-bar.component';
import { FooterComponent } from './split/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './home/item-list/item-list.component';
import { ItemComponent } from './home/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
