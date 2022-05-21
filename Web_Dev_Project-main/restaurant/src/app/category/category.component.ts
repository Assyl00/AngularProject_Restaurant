import { Component, OnInit } from '@angular/core';
import {categories} from '../categories';
import {ActivatedRoute} from '@angular/router';
import {MenusService} from '../menus.service';
import {Category} from '../Menu';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	categories: Category[] = [];

  constructor(private menuService: MenusService) { }

  ngOnInit(): void {
  	this.getCategory();
    // this.refreshDepList()
  }

  getCategory(): void{
    this.menuService.getCategoriesList().subscribe((categories) =>
    {
      this.categories = categories;
    });
  }
  // refreshDepList(){
  //   this.menuService.getCategoriesList().subscribe(data=>{
  //     this.categories=data;
  //     // this.DepartmentListWithoutFilter=data;
  //   });
  // }
  

}
