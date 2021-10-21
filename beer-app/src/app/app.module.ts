import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { BeerPageComponent } from './components/beer-page/beer-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BeerPageComponent,
    FoodPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
