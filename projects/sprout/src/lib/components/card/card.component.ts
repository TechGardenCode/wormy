import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sprout-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SproutCard {
  @HostBinding('class')
  get classList(): string {
    const light =
      'bg-slate-100 text-slate-800 p-8 rounded shadow-md border border-slate-200';
    const dark = 'bg-slate-800 text-slate-100 border-slate-700'
      .split(' ')
      .map((v) => `dark:${v}`)
      .join(' ');
    return [light, dark].join(' ');
  }
}
