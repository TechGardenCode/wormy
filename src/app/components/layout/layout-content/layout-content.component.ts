import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-layout-content',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    class: 'layout-content',
  },
  encapsulation: ViewEncapsulation.None,
})
export class LayoutContentComponent {}
