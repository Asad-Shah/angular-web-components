import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GreetingComponent implements OnChanges {
  @Input() name: string = '';
  @Output() emit = new EventEmitter<string>();

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes value: ', changes);
  }

  onClick(paragraph: HTMLParagraphElement) {
    this.emit.next(paragraph.innerText);
  }
}
