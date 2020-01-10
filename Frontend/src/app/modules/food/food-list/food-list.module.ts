import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FoodListRoutingModule } from './food-list.routing';


import { FoodListComponent } from './food-list.component';


@NgModule({
  declarations: [
  
    FoodListComponent
   
  ],
  imports: [SharedModule, FoodListRoutingModule ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class FoodListModule {}
