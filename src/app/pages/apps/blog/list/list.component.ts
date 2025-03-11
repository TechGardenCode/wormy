import { Component } from '@angular/core';
import { SproutCard } from '../../../../../../projects/sprout/src/public-api';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, SproutCard],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class BlogListComponent {
  today = new Date();

  articles = [
    {
      title: 'Article 1',
      description: 'This is a description of article 1',
      date: new Date(),
      comments: 5,
      shares: 10,
    },
    {
      title: 'Article 2',
      description: 'This is a description of article 2',
      date: new Date(),
      comments: 10,
      shares: 20,
    },
    {
      title: 'Article 3',
      description: 'This is a description of article 3',
      date: new Date(),
      comments: 15,
      shares: 30,
    },
  ];

  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.setTitle('Apps / Blog / List');
  }
}
