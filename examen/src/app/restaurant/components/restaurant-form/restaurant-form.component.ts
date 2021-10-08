import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() restaurantAdded = new EventEmitter<Restaurant>();

  // @ts-ignore
  // @ts-ignore
  public restaurant: Restaurant = {
    id: 0,
    nom: "",
    adresse: "",
    evaluations: []

  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.form && this.form.valid) {
      this.restaurantAdded.emit(this.restaurant);
      this.restaurant = {
        id: 0,
        nom: "",
        adresse: "",
        evaluations: []
      }
    }
  }

}
