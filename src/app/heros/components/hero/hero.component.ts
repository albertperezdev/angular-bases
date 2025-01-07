import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'SpiderMan';
  public age: number = 23;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeName(): void {
    this.name = 'Peter Parker';
  }
  changeAge(): void {
    this.age = 9;
  }

  resetChange(): void {
    this.name = 'SpiderMan';
    this.age = 23;

    document.querySelectorAll('h1').forEach((element) => {
      element.innerHTML = '<h1>Esto es angular</h1>';
    });
  }
}
