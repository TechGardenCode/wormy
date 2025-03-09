import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SproutButton, SproutInput } from '../../../../projects/sprout/src/public-api';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, SproutInput, SproutButton],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'layout-container',
  },
})
export class LayoutComponent {
  navItems = [
    {
      group: 'Dashboards',
      link: 'dashboard',
      items: [
        {
          title: 'E-Commerce',
          link: 'e-commerce',
        },
        {
          title: 'Banking',
          link: 'banking',
        },
      ],
    },
    {
      group: 'Apps',
      link: 'apps',
      items: [
        {
          title: 'Blog',
          link: 'blog',
          showItems: false,
          items: [
            {
              title: 'List',
              link: 'list',
            },
            {
              title: 'Detail',
              link: 'detail',
            },
            {
              title: 'Edit',
              link: 'edit',
            },
          ],
        },
        {
          title: 'Chat',
          link: 'chat',
        },
        {
          title: 'Files',
          link: 'files',
        },
        {
          title: 'Kanban',
          link: 'kanban',
        },
        {
          title: 'Mail',
          link: 'mail',
          showItems: false,
          items: [
            {
              title: 'Inbox',
              link: 'inbox',
            },
            {
              title: 'Compose',
              link: 'compose',
            },
            {
              title: 'Detail',
              link: 'detail',
            },
          ],
        },
        {
          title: 'Tasklist',
          link: 'tasklist',
        },
      ],
    },
    {
      group: 'UI Kit',
      link: 'ui-kit',
      items: [
        {
          title: 'Form Layout',
          link: 'form-layout',
        },
        {
          title: 'Input',
          link: 'input',
        },
        {
          title: 'Button',
          link: 'button',
        },
        {
          title: 'Table',
          link: 'table',
        },
        {
          title: 'List',
          link: 'list',
        },
        {
          title: 'Tree',
          link: 'tree',
        },
        {
          title: 'Panel',
          link: 'panel',
        },
        {
          title: 'Overlay',
          link: 'overlay',
        },
        {
          title: 'Media',
          link: 'media',
        },
        {
          title: 'Menu',
          link: 'menu',
        },
        {
          title: 'Message',
          link: 'message',
        },
        {
          title: 'File',
          link: 'file',
        },
        {
          title: 'Chart',
          link: 'chart',
        },
        {
          title: 'Misc',
          link: 'misc',
        },
      ],
    },
  ];

  constructor() {}
}
