import { Component, OnInit } from '@angular/core';

/* Services */
import { JustEatService } from '../../services/apis/just-eat.service';

/* Interfaces */
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  // Input Bindinds
  private outcode:string;

  // States
  private isLoading:boolean;
  private restaurants:Restaurant[];
  private noRestaurantsFound:boolean;
  private errorMessage:string;

  constructor(private justEatService:JustEatService) { }

  ngOnInit() {
    this.isLoading = false;
    this.restaurants = [];
    this.noRestaurantsFound = false;
  }
  
  getRestaurantsByOutcode() {
    let self = this;

    self.isLoading = true;
    self.errorMessage = '';

    self.justEatService.getRestaurantsByOutcode(self.outcode)
    .then((response) => { return response.json(); } )
    .then((jsonResponse) => {
      // transfrom the restaurant response object to the structure we want
      // {id, name, rating, cuisineTypes}
      self.restaurants = jsonResponse.Restaurants.map((restaurant) => {
        return {
          id: restaurant.Id,
          name: restaurant.Name, 
          rating: restaurant.RatingStars,
          cuisineTypes: restaurant.CuisineTypes.map(cuisinetype => cuisinetype.Name).join(', ')
        }
      })

      self.isLoading = false;
      
      if(self.restaurants.length === 0) {
        return Promise.reject(new Error("No restaurants found"));
      }
    })
    .catch((err) => {
      self.restaurants = [];
      self.isLoading = false; 
      self.errorMessage = err.toString();
    })
  } 
}
