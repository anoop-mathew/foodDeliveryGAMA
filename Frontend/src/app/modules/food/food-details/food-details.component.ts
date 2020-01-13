import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodService} from '../../../shared/service/food.service'
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodDetailsComponent implements OnInit {
  
  subscribedParam: any;
  id: any;

  foodDetail: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor( private ref: ChangeDetectorRef, private httpClient: HttpClient , private foodService: FoodService, private route: ActivatedRoute, private router : Router) {
   
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('_id'));
      this.id = params.get('_id');
    })

    this.loadDetails(this.id);
   

  // tslint:disable-next-line:member-ordering
}

loadDetails(id){
  this.foodService.getproducts(id).subscribe(
    (result) => {
      this.foodDetail = result;
   console.log(result);
  this.ref.markForCheck();
    }
  )
}


}

