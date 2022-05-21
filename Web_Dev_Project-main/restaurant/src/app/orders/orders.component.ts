import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {menu} from '../menu-list';
import {categories} from '../categories';
import {MenusService} from '../menus.service';
import {Category, Menu, Order} from '../Menu';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	orders: Order[] = [];

      items = this.menuService.getCart();

  constructor(private route: ActivatedRoute,
              private menuService: MenusService) { }


  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
  	this.menuService.getAllOrders().subscribe((categories) =>
    {
      this.orders = categories;
    });
  }

}
