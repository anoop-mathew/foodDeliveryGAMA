import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodCheckoutComponent } from './food-checkout/food-checkout.component';
import { FoodDetailsComponent } from './food-details/food-details.component';





export const routes: Routes = [
  {
    path: '',
    redirectTo: 'food-list',
    pathMatch: 'full'
  },
  {
  path: '',
    component: FoodComponent,
    children: [
      {
        path: 'cart',
        component: FoodCartComponent
      },
      {
        path: 'checkout',
        component: FoodCheckoutComponent
      },
      {
        path: 'details',
        component: FoodDetailsComponent
      },
      {
        path: 'food-list',
        loadChildren: () =>
          import('@modules/food/food-list/food-list.module').then(m => m.FoodListModule)
      },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule {}
