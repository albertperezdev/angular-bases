import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHero?: string;
  public herosList: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Hawkaye',
  ];

  deleteLastHero(): void {
    this.deletedHero = this.herosList.pop();
  }
}
