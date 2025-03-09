import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  _isSidebarOpen = true;
  isSidebarOpenSubject = new BehaviorSubject<boolean>(this._isSidebarOpen);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();

  constructor() {}

  toggleSidebar() {
    this._isSidebarOpen = !this._isSidebarOpen;
    this.isSidebarOpenSubject.next(this._isSidebarOpen);
  }
}
