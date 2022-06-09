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
    this.dataservice.name.subscribe(data=>{
      debugger
      this.newName = data;
    });
  }

}
