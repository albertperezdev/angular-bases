import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr />
    <p>Counter2 : {{ counter }}</p>

    <button (click)="incrementBy(1)">+1</button>
    <br />
    <button (click)="incrementBy(-1)">-1</button>
    <br />
    <button (click)="reset()">Reset</button>
  `,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 10;

  incrementBy(value: number): void {
    this.counter += value;
  }
  reset() {
    this.counter = 10;
  }

  constructor() {}
}
