import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { BlogPageComponent} from './blog-page/blog-page.component';
import { TravelsPageComponent} from './travels-page/travels-page.component';


const routes: Routes = [
{
  path: "", component: HomePageComponent
},{
  path: "blog", component: BlogPageComponent
},{
  path: "travels", component: TravelsPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
