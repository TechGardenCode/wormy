import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
