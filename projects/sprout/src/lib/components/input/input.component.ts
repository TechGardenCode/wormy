import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[sproutInput]',
})
export class SproutInput {
  @HostBinding('class')
  get classList(): string {
    const light =
      'bg-slate-100 text-slate-800 px-4 py-1 rounded shadow-md border border-slate-200';
    const dark = 'bg-slate-800 text-slate-100 border-slate-700'
      .split(' ')
      .map((v) => `dark:${v}`)
      .join(' ');
    return [light, dark].join(' ');
  }
}
