import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {menu} from '../menu-list';
import {categories} from '../categories';
import {MenusService} from '../menus.service';
import {Category, Menu} from '../Menu';

export class Feedback{
    constructor(public surname: string,
                public name: string,
                public email: string,
                public logoemail:string, 
                public star: number, 
                public servicelevel: string)
    { }
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
	feedback: Feedback = new Feedback("","","","", 0, "");
    feedbacks: Feedback[] = [];
    servicelevels: string[] = ["The best", "Middle", "Bad"];
    logoemails: string[] = ["@kbtu.kz", "@gmail.com", "@mail.ru"];
    addPhone(){
        this.feedbacks.push(new Feedback(this.feedback.surname, this.feedback.name, this.feedback.email, this.feedback.logoemail, this.feedback.star, this.feedback.servicelevel));
    }

  constructor() { }

  ngOnInit(): void {
  }

}


