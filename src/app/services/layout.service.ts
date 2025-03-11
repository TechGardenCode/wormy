import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  _isSidebarOpen = false;
  isSidebarOpenSubject = new BehaviorSubject<boolean>(this._isSidebarOpen);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();

  _title = '';
  title = new BehaviorSubject<string>(this._title);
  title$ = this.title.asObservable();

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationStart') {
        this.setTitle('');
      }
    });
  }

  setTitle(title: string) {
    this._title = title;
    this.title.next(this._title);
  }

  toggleSidebar() {
    this._isSidebarOpen = !this._isSidebarOpen;
    this.isSidebarOpenSubject.next(this._isSidebarOpen);
  }
}
