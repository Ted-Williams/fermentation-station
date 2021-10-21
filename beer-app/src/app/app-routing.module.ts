import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeerPageComponent } from './components/beer-page/beer-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path:'', component:AppComponent, children:[
    {path:'home', component:HomePageComponent},
    {path:'beer', component:BeerPageComponent},
    {path:'food', component:FoodPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
