import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CartService } from '@shared/service/cart.service'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCartComponent implements OnInit {
  cartItem: any;
  items: any;
  dlt: any;
  subtotal: any;
  // total$: Observable<number>;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private CartService: CartService, private ref: ChangeDetectorRef) {  
    // this.total$ = CartService.total$;
  //   this.cartItem = [
  //   {id: '1', name: 'Dosa', price: '50', qty: 1},
  //   {id: '2', name: 'Idli', price: '30', qty: 2},
  //   {id: '3', name: 'Appam', price: '40', qty: 3}

  // ]
  // localStorage.setItem('cart', JSON.stringify(this.cartItem));
 
}

  ngOnInit() {
    this.CartService.findTotal();
    this.items = JSON.parse(localStorage.getItem('cart1'));
    this.subtotal = this.CartService.subTotal();
  }
deleteitem(deleteitemName){
  console.log(deleteitemName);
  // tslint:disable-next-line:prefer-const
  this.CartService.removeById(deleteitemName);
  // localStorage.setItem('cart', JSON.stringify(v));
 this.items = this.CartService.getCartItems();
}

decrease(product){
  product.qty--;
  this.CartService.removeItem(product);
  this.items = this.CartService.getCartItems();
  this.CartService.findTotal();
  this.subtotal=this.CartService.subTotal();
  this.ref.markForCheck();

    }
   
   
  addTocart(product){
      product.qty++;
      this.CartService.addTocart(product);
      this.items = this.CartService.getCartItems();
      this.CartService.findTotal();
      this.subtotal=this.CartService.subTotal();

      this.ref.markForCheck();
    }
}
