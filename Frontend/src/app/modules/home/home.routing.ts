import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectResolver } from './project-resolver.service';
import { HomeComponent } from './page/home.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
// import { IndianComponent } from './page/indian/indian.component';
// import { ChineseComponent } from './page/chinese/chinese.component';
// import { AmericanComponent } from './page/american/american.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'indian',
  //   component: IndianComponent
  // },
  // {
  //   path: 'chinese',
  //   component: ChineseComponent
  // },
  // {
  //   path: 'american',
  //   component: AmericanComponent
  // },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
