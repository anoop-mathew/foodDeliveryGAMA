import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.scss']
})
export class IndianComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['logout']);
  }

  home() {
    this.router.navigate(['/home/home']);
  }

  cart() {
    this.router.navigate(['cart']);
  }
}
