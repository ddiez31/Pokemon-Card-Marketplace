import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addCart(): void {
    console.log('value', this.value);
  }

  reset(): void {
    this.value = 0;
  }
}
