import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RestaurantSmartComponentComponent} from "./Restaurant/pages/restaurant-smart-component/restaurant-smart-component.component";
import {RestaurantTableComponent} from './Restaurant/components/restaurant-table/restaurant-table.component';
import {RestaurantFormComponent} from './Restaurant/components/restaurant-form/restaurant-form.component';
import {RestaurantService} from "./Restaurant/services/restaurant.service";
import { TableColorationDirective } from './shared/directives/table-coloration.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSmartComponentComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    TableColorationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
