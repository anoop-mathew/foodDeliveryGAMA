import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.scss']
})
export class AmericanComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['logout']);
  }

  cart() {
    this.router.navigate(['cart']);
  }
}
