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

  private outcode:string = '';
  private restaurants:Restaurant[] = [];
  private noRestaurantsFound:boolean = false;

  constructor(private justEatService:JustEatService) { }

  ngOnInit() {
  }


  
  getRestaurantsByOutcode() {
    let self = this;

    self.justEatService.getRestaurantsByOutcode(self.outcode)
    .then((response) => { return response.json();} )
    .then((jsonResponse) => {
      self.restaurants = jsonResponse.Restaurants.map((restaurant) => {
        return {
          id: restaurant.Id,
          name: restaurant.Name, 
          rating: restaurant.RatingStars,
          cuisineTypes: restaurant.CuisineTypes.map(cuisinetype => cuisinetype.Name).join(', ')
        }
      })
      self.noRestaurantsFound = (self.restaurants.length === 0);
    })
    .catch((err) => {
      console.error(err);
    })
  } 
}
