import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FoodService } from '@shared/service/food.service';
import { FoodList } from './food-list';
import { map, merge, mergeMap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs'
import { CartService } from '@shared/service/cart.service';
//import { FoodList } from './food-list';
import { MessageService } from '@shared/service/message.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FoodListComponent implements OnInit, OnDestroy {

  foodlist: any;
  cateName: any;
  subscription: Subscription;
  //food = new FoodList();

  constructor(private messageService: MessageService, private route: ActivatedRoute, private router: Router, private FoodService: FoodService, private cartService: CartService, private ref: ChangeDetectorRef) {
    this.subscription = this.messageService.getCategory().subscribe(message => {

      //alert(message.text);
      this.foodlist = this.FoodService.getfoodListByCategoy(message.text).pipe();
      this.ref.markForCheck();
      console.log(message);

    });
  }

  ngOnInit() {
    this.foodlist = this.FoodService.getfoodList().pipe();
  }

  addTocart(item) {
    alert('Item added to cart');
    console.log(item)
    this.cartService.addTocart(item);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}