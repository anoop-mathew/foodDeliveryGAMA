import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
 
})
export class FoodListComponent implements OnInit {
  constructor(private router: Router) {}
  list = [
    {
      'id': 1,
      'fid': 101,
      'fname': 'Apple Pie',
      'fprice': 100,
      'img': '/assets/images/Apple-Pie.jpg'
    },
    {
      'id': 2,
      'fid': 102,
      'fname': 'Hamburger',
      'fprice': 200,
      'img': '/assets/images/Hamburger.jpg'
    },
    {
      'id': 3,
      'fid': 103,
      'fname': 'Clam Chowder',
      'fprice': 300,
      'img': '/assets/images/Clam-Chowder.jpg'
    },
    {
      'id': 4,
      'fid': 104,
      'fname': 'Bagel and Lox',
      'fprice': 400,
      'img': '/assets/images/Bagel.jfif'
    },
    {
      'id': 5,
      'fid': 105,
      'fname': 'Deep-Dish Pizza',
      'fprice': 500,
      'img': '/assets/images/Deep.jpg'
    },
    {
      'id': 6,
      'fid': 106,
      'fname': 'Tacos',
      'fprice': 600,
      'img': '/assets/images/Tacos.jpg'
    },
    {
      'id': 7,
      'fid': 107,
      'fname': 'Texas Barbecue',
      'fprice': 700,
      'img': '/assets/images/Texas.jfif'
    },
    {
      'id': 8,
      'fid': 108,
      'fname': 'Chicken fried steak',
      'fprice': 800,
      'img': '/assets/images/Chicken.jpg'
    },
    {
      'id': 9,
      'fid': 109,
      'fname': 'Banana split',
      'fprice': 900,
      'img': '/assets/images/Banana.jfif'
    }
  ];
 
  cart() {
    this.router.navigate(['/food/cart']);
  }
  ngOnInit(){}

}
