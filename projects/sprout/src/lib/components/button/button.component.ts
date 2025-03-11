import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[sproutButton]',
})
export class SproutButton {
  @Input() variant: 'text' | 'icon' = 'text';
  @Input() btnStyle: 'primary' | 'secondary' | 'outline' = 'primary';

  @HostBinding('class')
  get classes(): string {
    const base = [
      'cursor-pointer border hover:brightness-[0.95] active:brightness-[0.9]',
    ];
    if (this.variant === 'icon') {
      base.push('p-4', 'rounded-full');
    } else {
      base.push('px-4', 'py-2', 'rounded', 'border');
    }
    const light: string[] = [];
    if (this.btnStyle === 'primary') {
      light.push('bg-blue-500', 'text-white', 'border-blue-600');
    }
    if (this.btnStyle === 'secondary') {
      light.push('bg-white', 'text-slate-800', 'border-slate-200');
    }
    const dark = 'bg-slate-800 text-white border-slate-700'
      .split(' ')
      .map((v) => `dark:${v}`)
      .join(' ');
    return [...base, ...light, dark].join(' ');
  }
}
