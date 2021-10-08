import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-smart-component',
  templateUrl: './restaurant-smart-component.component.html',
  styleUrls: ['./restaurant-smart-component.component.css']
})
export class RestaurantSmartComponentComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  private loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(value => this.restaurants = value);
  }

  public restaurantAdded(restaurant: Restaurant): void {
    this.restaurantService.addRestaurant(restaurant);
  }

}
