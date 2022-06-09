import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  @ViewChild(EmployeeComponent)
  private counterComponent: EmployeeComponent;
  TestMessage: string = 'this is smaller case test !';
  seconds() { return 0; }
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () =>this.counterComponent.seconds, 0);
    }
    start() { 
      debugger
      this.counterComponent.start(); 
    }
    stop() { 
      debugger
      this.counterComponent.stop(); 
    }

}
