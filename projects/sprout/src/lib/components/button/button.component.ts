import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[sproutButton]',
})
export class SproutButton {
  @Input() variant: 'primary' | 'secondary' | 'icon' = 'primary';

  @HostBinding('class')
  get classList(): string {
    const base = ['cursor-pointer hover:brightness-[1.10] active:brightness-[0.9]'];
    if (this.variant === 'icon') {
      base.push('p-4', 'rounded-full');
    } else {
      base.push('px-4', 'py-2', 'rounded', 'border');
    }
    const light = 'bg-slate-100 text-slate-800 border-slate-200';
    const dark = 'bg-slate-800 text-slate-100 border-slate-700'
      .split(' ')
      .map((v) => `dark:${v}`)
      .join(' ');
    return [...base, light, dark].join(' ');
  }
}
