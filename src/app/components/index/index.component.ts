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

  private restaurants:Restaurant[] = [];

  constructor(private justEatService:JustEatService) { }

  ngOnInit() {
  }
  
  getRestaurantsByOutcode(outcode:string) {
    let self = this;

    self.justEatService.getRestaurantsByOutcode('se19')
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
      debugger;
    })
    .catch((err) => {
      debugger;
    })
  } 
}
