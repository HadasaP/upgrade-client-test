import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProcessModel } from 'src/models/procesModel';
import { BbComponent } from './bb/bb.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html'
})
export class BComponent implements OnInit {
  @ViewChild("bb") bb!: BbComponent;
  @Output() onResetContacts: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteContacts: EventEmitter<any> = new EventEmitter();
  @Output() onAddInsuredToContacts: EventEmitter<any> = new EventEmitter();
  @Input() process: ProcessModel | undefined;
  @Output() processChange: EventEmitter<ProcessModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  isCompanyEmployer(): string {
    if (!this.process || !this.process.insured || !this.process.insured.companyEmployer) {
      return '';
    } else {
      return 'עובד חברה - ' + this.process.insured.position;
    }
  }

  addInsuredToContacts() {
    if (this.process)
      this.onAddInsuredToContacts.emit(this.process.insured);
  }

  deleteContacts() {
    this.onDeleteContacts.emit();
  }

  resetContacts() {
    this.onResetContacts.emit();
  }
}
