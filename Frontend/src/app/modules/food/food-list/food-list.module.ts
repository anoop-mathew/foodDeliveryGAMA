import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FoodListRoutingModule } from './food-list.routing';

import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { AmericanComponent } from './american/american.component';
import { FoodListComponent } from './food-list.component';


@NgModule({
  declarations: [
   IndianComponent,
    ChineseComponent,
    AmericanComponent,
    FoodListComponent
   
  ],
  imports: [SharedModule, FoodListRoutingModule ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class FoodListModule {}
