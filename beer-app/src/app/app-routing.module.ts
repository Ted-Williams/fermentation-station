import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPageComponent } from './components/beer-page/beer-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:'', component:PageWrapperComponent, children:[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomePageComponent},
    {path:'beer', component:BeerPageComponent},
    {path:'food', component:FoodPageComponent},

  ]},
  {path:'**', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
