import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html'
})
export class BbComponent implements OnInit {
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() onResetContacts: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteContacts: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  count!: number;
  isToShow: boolean = true;

  resetContacts() {
    this.onResetContacts.emit();
  }

  deleteContacts() {
    this.onDeleteContacts.emit();
  }

  addToContacts() {
    this.add.emit();
  }

  updateContactsCount(count: number) {
    this.count = count;
  }
}
