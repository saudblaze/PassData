import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }

  InputDecorator(){
    debugger
    //alert(1);
    this.router.navigate(['ParentComponent']);
  }

  OutputDecorator(){
    this.router.navigate(['ParentComponent']);
  }
  ViewChildDecorator(){
    this.router.navigate(['ParentComponent']);
  }
  Service(){
    this.router.navigate(['ParentComponent']);
  }

}
