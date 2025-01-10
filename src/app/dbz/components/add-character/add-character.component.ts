import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onEmitCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter() {
    console.log(this.character);
    if (this.character.name.length == 0) {
      return;
    }
    this.onEmitCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
