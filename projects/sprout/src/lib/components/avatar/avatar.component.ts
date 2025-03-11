import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sprout-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SproutAvatar {
  private _monogram = '';

  @Input() imageUrl?: string;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  get monogram(): string {
    return this._monogram;
  }

  @Input()
  set monogram(monogram: string) {
    this._monogram = monogram.slice(0, 2).toUpperCase();
  }

  @HostBinding('class')
  get classes(): string {
    const base: string[] = ['block', 'relative', 'rounded-full'];

    if (this.size === 'sm') {
      base.push('w-6 h-6 text-sm');
    } else if (this.size === 'md') {
      base.push('w-8 h-8');
    } else if (this.size === 'lg') {
      base.push('w-12 h-12 text-xl');
    } else if (this.size === 'xl') {
      base.push('w-16 h-16 text-2xl');
    }

    const light: string[] = [];

    const dark: string[] = [
      'bg-slate-800',
      'text-white',
      'border-slate-700',
    ].map((v) => `dark:${v}`);

    return [...base, ...light, ...dark].join(' ');
  }
}
