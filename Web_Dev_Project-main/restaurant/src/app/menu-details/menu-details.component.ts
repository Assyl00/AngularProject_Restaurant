import { Component, OnInit } from '@angular/core';
import {menu} from '../menu-list';
import {ActivatedRoute} from '@angular/router';
import {MenusService} from '../menus.service';
import {Menu} from '../Menu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
    private menuService: MenusService) { }

  product!: Menu | undefined;

  ngOnInit(): void {
  	this.getMenuDetails();
  }
  getMenuDetails(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('productId');
      this.menuService.getProductsDetails(id).subscribe((menu) => {
        this.product = menu;
      });
    });
  }
  // addToCart(product: any) {
  //   this.menuService.addToOrder(product);
  //   window.alert('Your product has been added to the cart!');
  // }
  addToCart(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('productId');
      this.menuService.addToOrder(id).subscribe((menu) => {
        this.product = menu;
      });
    });
  }

  // addToCart(){
  //   var val = {DepartmentId:this.DepartmentId,
  //               DepartmentName:this.DepartmentName};
  //   this.service.addDepartment(val).subscribe(res=>{
  //     alert(res.toString());
  //   });
  // }
  // addToCart(product: any) {
  //   this.menuService.addToOrder(product);
  //   window.alert('Your product has been added to the cart!');
  // }
}
