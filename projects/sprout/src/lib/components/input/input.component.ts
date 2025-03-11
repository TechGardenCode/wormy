import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[sproutInput]',
})
export class SproutInput {
  @HostBinding('class')
  get classList(): string {
    const light =
      'bg-white text-slate-800 px-4 py-1 rounded border border-slate-200';
    const dark = 'bg-slate-800 text-white border-slate-700'
      .split(' ')
      .map((v) => `dark:${v}`)
      .join(' ');
    return [light, dark].join(' ');
  }
}
