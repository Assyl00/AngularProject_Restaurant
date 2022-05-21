import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImagesComponent } from './images/images.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';

import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor'

import { CategoryComponent } from './category/category.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { TopBackComponent } from './top-back/top-back.component';
import { OrdersComponent } from './orders/orders.component';
import { FeedbackComponent } from './feedback/feedback.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'menu', component: CategoryComponent},
  { path: 'sign-in', component: SignInComponent},
  {path: 'category/:categoryId', component: MenuComponent},
  {path: 'products/:productId', component: MenuDetailsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'feedback', component: FeedbackComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ImagesComponent,
    BottomBarComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    SignInComponent,
    CategoryComponent,
    MenuDetailsComponent,
    TopBackComponent,
    OrdersComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
