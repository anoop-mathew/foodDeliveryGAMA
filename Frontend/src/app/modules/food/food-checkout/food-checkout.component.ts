import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '@shared/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-checkout',
  templateUrl: './food-checkout.component.html',
  styleUrls: ['./food-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  submitted = false;
  items: any;
  subtotal: any;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private formBuilder: FormBuilder, private CartService: CartService, private router :Router) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cname: ['', Validators.required],
      cnum: ['', [Validators.required, Validators.minLength(16)]],
      month: ['', Validators.required],
      year: ['', [Validators.required, Validators.minLength(4)]],
      cvvv: ['', [Validators.required, Validators.minLength(3)]]

    })

    this.CartService.findTotal();
    this.items = JSON.parse(localStorage.getItem('cart1'));
    this.subtotal = this.CartService.subTotal();

  }

  get f() { return this.checkoutForm.controls; }

  onSubmit(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.checkoutForm.invalid) {
      return;
  }

  // display form values on success
  else{
    localStorage.clear();
  alert('Thankyou for purchasing');
  this.router.navigate(['/home/home'])
  }
}



}