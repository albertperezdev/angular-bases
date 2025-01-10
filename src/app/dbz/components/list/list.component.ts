import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onEmitDelete: EventEmitter<number> = new EventEmitter();
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(index: number): void {
    this.onEmitDelete.emit(index);
  }
}
