import { Component, OnInit } from '@angular/core';
import { iMenuOptions } from './interfaces/menu-options';

export const MENU_OPTIONS: Array<iMenuOptions> = [
  { path: 'home', label: 'Home' },
  { path: 'todo', label: 'Tasks' },
  { path: 'todosrv', label: 'Tasks by service' },
  { path: 'about', label: 'About' },
];

@Component({
  selector: 'isdi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';
  menuOptions!: Array<iMenuOptions>;

  constructor() {}

  ngOnInit(): void {
    this.menuOptions = MENU_OPTIONS;
  }
}
