import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message : string = '';
  seconds : number = 0;
  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit() { 
    //this.start(); 
  }
  ngOnDestroy() { this.clearTimer(); }
  start() {
    debugger
    this.countDown();
  }
  stop() {
    debugger
    this.clearTimer();
    this.message = `Holding at T - ${this.seconds} seconds`;
  }

  private countDown() {
    debugger
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 0) {
        this.message = 'Completed counting!';
      } else {
        if (this.seconds < 0) { this.seconds = 50; } // reset
        this.message = `Vote-${this.seconds} and counting going on`;
      }
    }, 1000);
  }
}
