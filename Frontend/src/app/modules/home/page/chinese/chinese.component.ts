import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.scss']
})
export class ChineseComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['logout']);
  }

  cart() {
    this.router.navigate(['cart']);
  }
}
