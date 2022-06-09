import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  title: string;
  childData: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  emittedDataByChild(mdata: string) {
    debugger
    this.childData = mdata;
  }

}
