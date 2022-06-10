import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {
  name: string = "Set from employee 1 .";
  constructor(private dataservice: DataServiceService) { }

  ngOnInit(): void {
  }
  GreetEmployee(){
    debugger
    this.dataservice.sendMessage("Good Morning Employee 1 !");
  }
  ApreciateEmployee(){
    debugger
    this.dataservice.sendMessage("Well Done !");
  }
}
