import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { CommonModule } from '@angular/common';
import { SproutAvatar, SproutButton } from '../../../../../projects/sprout/src/public-api';
import { SproutCard } from "../../../../../projects/sprout/src/lib/components/card/card.component";

@Component({
  selector: 'app-banking',
  imports: [CommonModule, SproutAvatar, SproutButton, SproutCard],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.css'
})
export class BankingComponent {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.setTitle('Banking Dashboard');
  }
}
