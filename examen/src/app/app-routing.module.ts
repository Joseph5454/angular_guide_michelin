import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantSmartComponentComponent} from "./Restaurant/pages/restaurant-smart-component/restaurant-smart-component.component";

const routes: Routes = [
  {path: "", component: RestaurantSmartComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
