import { Component } from '@angular/core';
import { SproutCard } from '../../../../../projects/sprout/src/public-api';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-e-commerce',
  imports: [SproutCard],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.css'
})
export class ECommerceComponent {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.setTitle('E-Commerce Dashboard');
  }
}
