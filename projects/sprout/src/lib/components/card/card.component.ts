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
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SproutCard {
  @HostBinding('class')
  get classes(): string {
    const light =
      'bg-white text-slate-800 p-8 rounded border border-slate-200';
    const dark = 'bg-slate-800 text-white border-slate-700'
      .split(' ')
      .map((v) => `dark:${v}`)
      .join(' ');
    return [light, dark].join(' ');
  }
}
