import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '@shared/service/food.service';
import { MessageService } from '@shared/service/message.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  categorylist: any;
constructor(private foodService: FoodService, private router: Router , private messageService: MessageService) {

}

ngOnInit() {
  console.log(this.categorylist);
  this.categorylist = this.foodService.getcategory().pipe();
  console.log(this.categorylist);
}

navigatelistpage(name) {
  this.router.navigateByUrl('/food/food-list/' + name);
  this.messageService.sendCategory(name);
}

}


//   openNav() {
//     document.getElementById('mySidenav').style.width = '250px';
//     document.getElementById('main').style.marginLeft = '250px';
//   }
  
//    closeNav() {
//     document.getElementById('mySidenav').style.width = '0';
//     document.getElementById('main').style.marginLeft = '0';
//   }

  
//   Logout() {
//     this.router.navigate(['/auth/login']);
//   }
//   indian() {
//     this.router.navigate(['food/food-list/indian']);
//   }

//   chinese() {
//     this.router.navigate(['food/food-list/chinese']);
//   }

//   american() {
//     this.router.navigate(['food/food-list/american']);
//   }
// }
