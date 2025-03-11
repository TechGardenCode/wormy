import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {
  title = 'wormy';

  constructor() {
    localStorage['theme'] = "light";

    document.documentElement.classList.toggle(
      "dark",
      localStorage['theme'] === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }
}
