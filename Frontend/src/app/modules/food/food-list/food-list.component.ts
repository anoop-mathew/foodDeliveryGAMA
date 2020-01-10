import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '@shared/service/food.service';
import { FoodList } from './food-list';
import { map, merge, mergeMap } from 'rxjs/operators';
import { Subject } from 'rxjs'
//import { FoodList } from './food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FoodListComponent implements OnInit {

  //FoodList: any = [];
  //food = new FoodList();

  constructor(private router: Router, private FoodService: FoodService) {
  }


  ngOnInit() {
    //console.log(this.FoodList);
  }
  cart() {
    this.router.navigate(['/food/cart']);
  }


  foodList = this.FoodService.getfoodList().pipe();
}