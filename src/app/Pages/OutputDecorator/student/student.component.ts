import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Output() emitData = new EventEmitter<string> ();
  message:string = '11';
  constructor() { }
  
  ngOnInit(): void {
  }

  sendData() {
    debugger
    this.message = "Button Click !!!";
    this.emitData.emit("Button Click!!!");
  }

  getMessage() {
    return this.message;
  }

}
