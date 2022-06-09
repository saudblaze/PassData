import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private nameSource = new BehaviorSubject<string>('');
  name = this.nameSource.asObservable()
  constructor() { }
  changeName(name: string) {
    debugger
    this.nameSource.next(name);
  }

  getchangeName() {
    return this.name;
  }
}
