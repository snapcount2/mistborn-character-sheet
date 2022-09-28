import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Output() action: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Input() actionEnabled: boolean = false;

  public executeAction(event: MouseEvent): void {
    this.action.emit(event);
  }

}
