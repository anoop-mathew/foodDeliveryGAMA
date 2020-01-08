import { NgModule } from '@angular/core';
import { FoodComponent } from './food.component';
import { SidenavComponent } from 'app/layout/sidenav/sidenav.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodCheckoutComponent } from './food-checkout/food-checkout.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { SharedModule } from '@shared/shared.module';
import { FoodRoutingModule } from './food.routing';
import {CarouselModule} from 'ngx-bootstrap/carousel'





@NgModule({
  declarations: [
    FoodComponent,
    SidenavComponent,
    FoodDetailsComponent,
    FoodCheckoutComponent,
    FoodCartComponent,
    
  ],
  imports: [SharedModule, FoodRoutingModule, CarouselModule.forRoot()],
  exports: [],
  providers: [],
  entryComponents: []
})
export class FoodModule {}
