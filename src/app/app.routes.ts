import { Routes } from '@angular/router';
import { ECommerceComponent } from './pages/dashboard/e-commerce/e-commerce.component';
import { IndexComponent } from './pages/(index)/index.component';
import { NotImplementedComponent } from './pages/not-implemented/not-implemented.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard/e-commerce',
        component: ECommerceComponent,
      },
      {
        path: 'dashboard/banking',
        component: NotImplementedComponent,
      },
      {
        path: 'apps/blog/list',
        component: NotImplementedComponent,
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
        component: NotImplementedComponent,
      },
      {
        path: 'apps/files',
        component: NotImplementedComponent,
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
