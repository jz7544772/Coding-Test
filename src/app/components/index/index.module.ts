import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Components */
import { IndexComponent } from './index.component';
import { RestaurantItemComponent } from './restaurant-item/restaurant-item.component';

/* Services */
import { JustEatService } from '../../services/apis/just-eat.service';

@NgModule({
    imports: [
      CommonModule, 
      FormsModule
    ],
    declarations: [
        IndexComponent, 
        RestaurantItemComponent
    ], 
    providers: [
      JustEatService
    ],
    exports: [
      IndexComponent, 
      RestaurantItemComponent
    ]
  })
  export class IndexModule { }