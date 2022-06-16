import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isdi-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  userName!: string;

  constructor() {}

  ngOnInit(): void {
    this.userName = 'Pepe';
  }

  handleClick() {
    this.userName = '';
  }
}
