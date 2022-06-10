import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-subscribe',
  templateUrl: './observable-subscribe.component.html',
  styleUrls: ['./observable-subscribe.component.css']
})
export class ObservableSubscribeComponent implements OnInit {

  contacts$:any;
  users : any ;
  userStatus : any;
  constructor() { }

  ngOnInit(): void {
    this.users = ['jalees','arjun','saud','waqar','suhel','shakir'];


    this.contacts$ = of(this.users);
    console.log(this.contacts$);

    new Observable(observer => {

      setTimeout(() => {
        observer.next('In Progress ...');
      },2000);

      setTimeout(() => {
        observer.next('Pending ...');
      },4000);

      setTimeout(() => {
        observer.next('Completed !');
      },6000);

    }).subscribe(data => {
        this.userStatus = data;
    },error => {
      alert(1);
    });
  }

}
