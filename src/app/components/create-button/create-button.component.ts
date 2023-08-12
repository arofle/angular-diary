import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css'],
})
export class CreateButtonComponent {
  @Input() buttonText: string = 'Создать';
  @Output() handleClick = new EventEmitter();

  onClick() {
    this.handleClick.emit();
  }
}
