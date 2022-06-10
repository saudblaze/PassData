import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit {
  newName: string;
  constructor(private dataservice: DataServiceService) { }

  ngOnInit(): void {
    debugger
    this.dataservice.teacherMessage$.subscribe( message => {
      debugger
      if(message == 'Good Morning Employee 1 !')
      {
          alert('Good Morning Employee 1 !')
      }
      else if (message == 'Well Done !')
      {
        alert('Thank You !')
      }
    });
  }

}
