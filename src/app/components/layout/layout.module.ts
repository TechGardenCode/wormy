import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';

const components = [LayoutComponent, LayoutContentComponent];

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components],
})
export class LayoutModule {}
