import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-food-checkout',
  templateUrl: './food-checkout.component.html',
  styleUrls: ['./food-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCheckoutComponent implements OnInit {
  cart = [
    {
    'id': 1,
    p_Name: 'Product1',
    p_Price: '15$'
    },
    {
    'id': 2,
    p_Name: 'Product2',
    p_Price: '5$'
    },
    {
    'id': 3,
    p_Name: 'Product3',
    p_Price: '8$'
    },
    {
    'id': 4,
    p_Name: 'Product4',
    p_Price: '2$'
    }
    ] 
  constructor() { }

  ngOnInit() {
  }

}
