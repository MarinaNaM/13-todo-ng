import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'isdi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() options!: Array<any>;
  constructor() {}

  ngOnInit(): void {
    console.log(this.options);
  }
}
