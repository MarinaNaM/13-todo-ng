import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MENU_OPTIONS } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MENU_OPTIONS[0].path,
  },
  {
    path: MENU_OPTIONS[0].path,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: MENU_OPTIONS[1].path,
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: MENU_OPTIONS[2].path,
    loadChildren: () =>
      import('./todo copy/todo.module').then((m) => m.TodoSrvModule),
  },
  {
    path: MENU_OPTIONS[3].path,
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '**',
    redirectTo: MENU_OPTIONS[0].path,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
