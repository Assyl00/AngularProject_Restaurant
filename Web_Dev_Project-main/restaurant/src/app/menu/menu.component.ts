import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {menu} from '../menu-list';
import {categories} from '../categories';
import {MenusService} from '../menus.service';
import {Category, Menu} from '../Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private menuService: MenusService) { }

  menu: Menu[] = [];
  category = categories;
  ngOnInit(): void {
  	this.getMenu();
    // this.refreshDepList();
  }

  getMenu(): void{
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('categoryId');
      this.menuService.getProducts(id).subscribe((menu) => {
        this.menu = menu;
      });
    });
  }

  // refreshDepList(){
  //   this.menuService.getDepList().subscribe(data=>{
  //     this.menu=data;
  //     // this.DepartmentListWithoutFilter=data;
  //   });
  // }
  

}
