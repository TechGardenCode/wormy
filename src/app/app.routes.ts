import { Routes } from '@angular/router';
import { ECommerceComponent } from './pages/dashboard/e-commerce/e-commerce.component';
import { IndexComponent } from './pages/(index)/index.component';
import { NotImplementedComponent } from './pages/not-implemented/not-implemented.component';
import { BankingComponent } from './pages/dashboard/banking/banking.component';
import { BlogListComponent } from './pages/apps/blog/list/list.component';
import { ChatComponent } from './pages/apps/chat/chat.component';
import { FilesComponent } from './pages/apps/files/files.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard/e-commerce',
        component: ECommerceComponent,
        title: 'E-Commerce',
      },
      {
        path: 'dashboard/banking',
        component: BankingComponent,
        title: 'Banking',
      },
      {
        path: 'apps/blog/list',
        component: BlogListComponent,
      },
      {
        path: 'apps/blog/detail',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/blog/edit',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/chat',
        component: ChatComponent,
      },
      {
        path: 'apps/files',
        component: FilesComponent,
      },
      {
        path: 'apps/kanban',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/mail/inbox',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/mail/compose',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/mail/detail',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/tasklist',
        component: NotImplementedComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard/e-commerce',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard/e-commerce',
  },
];
