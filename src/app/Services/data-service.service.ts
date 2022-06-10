import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // private nameSource = new BehaviorSubject<string>('');
  // name = this.nameSource.asObservable()

private _teacherMessageSource = new Subject<string>();
teacherMessage$ = this._teacherMessageSource.asObservable();

  constructor() { }
  // changeName(name: string) {
  //   debugger
  //   this.nameSource.next(name);
  // }

  // getchangeName() {
  //   return this.name;
  // }

  sendMessage(message:string)
  {
    this._teacherMessageSource.next(message);
  }

}
