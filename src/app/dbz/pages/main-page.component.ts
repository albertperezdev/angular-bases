import { Component } from '@angular/core';
import { Character } from '../interfaces/charater.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})
export class DbzComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character) {
    this.characters.push(character);
  }
  onDeletedCharacter(index: number) {
    this.characters.splice(index, 1);
  }
}
