import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category, Menu, AuthToken} from './Menu';
import {HttpClient} from '@angular/common/http';
import {categories} from './categories';
import {menu} from './menu-list';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private client: HttpClient) { }

  items: any[] = [];

  // BASE_URl = "http://127.0.0.1:8000"
  BASE_URl = "https://dummyjson.com"
  getCategory(): Observable<Category[]> {
    return of(categories);
  }



  // tslint:disable-next-line:typedef
  getMenu(id: number){
    const cat = menu.filter((x) => x.category_id === id);
    return of(cat);
  }

  // tslint:disable-next-line:typedef
  getMenuDetails(id: number){
    const food = menu.find((x) => x.id === id);
    return of(food);
  }

    // tslint:disable-next-line:typedef
  addToCart(product: any){
    this.items.push(product);
  }

  // tslint:disable-next-line:typedef
  getCart(){
    return this.items;
  }
  login(username: any, password: any): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URl}/api/login/`, {
      username,
      password
    });
  }
  getCategoriesList():Observable<any[]>{
    return this.client.get<any[]>(`${this.BASE_URl}/api/categories/`);
  }
  // addDepartment(id: number): Observable<any[]>{
  //   const cat = menu.filter((x) => x.category_id === id);
  //   return this.client.get<any[]>(`${this.BASE_URl}/api/categories/id`);
  // }
  getProducts(id: number): Observable<any[]>{
    return this.client.get<any[]>(`${this.BASE_URl}/api/categories/${id}/products`);
  }

  getProductsDetails(id: number): Observable<Menu>{
    return this.client.get<Menu>(`${this.BASE_URl}/api/categories/${id}/products`);
  }

  addToOrder(val): Observable<any>{
    return this.client.post<any>(`${this.BASE_URl}/api/orders`, val);
  }
  getAllOrders():Observable<any[]>  {
    // return this.client.get<any[]>(`${this.BASE_URl}/api/orders`);
    return this.client.get<any[]>(`${this.BASE_URl}/products`);
  }

}
