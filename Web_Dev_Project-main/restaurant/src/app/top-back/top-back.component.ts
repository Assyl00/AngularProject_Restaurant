import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-top-back',
  templateUrl: './top-back.component.html',
  styleUrls: ['./top-back.component.css']
})
export class TopBackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClick(){
    this.location.back();
  }
  
}
