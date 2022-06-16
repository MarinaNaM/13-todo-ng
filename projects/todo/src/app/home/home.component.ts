import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isdi-home',
  template: `
    <h2>Home</h2>
    <isdi-greetings></isdi-greetings>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
