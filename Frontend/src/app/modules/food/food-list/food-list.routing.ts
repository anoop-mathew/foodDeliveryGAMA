import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './food-list.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { AmericanComponent } from './american/american.component';

export const routes: Routes = [
  {
    path: '',
    component: FoodListComponent,
    // pathMatch: 'full'
  },
  {
  // path: '',
  //   component: FoodListComponent,
  //   children: [
//       {
//         path: 'indian',
//         component: IndianComponent
//       },
//       {
//         path: 'chinese',
//         component: ChineseComponent
//       },
//       {
//         path: 'american',
//         component: AmericanComponent
//       },
  
// ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodListRoutingModule {}
