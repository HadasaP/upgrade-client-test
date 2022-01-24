import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactPersonType } from 'src/enums/contactPersonType ';
import { Address } from 'src/models/address';
import { CodeValueModel } from 'src/models/codeValueModel';
import { ContactPerson } from 'src/models/contactPerson';
import { ProcessModel } from 'src/models/procesModel';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html'
})
export class AComponent implements OnInit {
  @Output() onUpdateContactsCount: EventEmitter<any> = new EventEmitter();
  @Input() process: ProcessModel | undefined;
  @Output() processChange: EventEmitter<ProcessModel> = new EventEmitter();
  constructor() { }
  contactPersons: Array<ContactPerson> = [];
  contactPersonType = ContactPersonType;
  ngOnInit(): void {
    this.contactPersons = [
      new ContactPerson(1, true, new CodeValueModel(1, 'מבוטח'), 'ניקיטה', "ג'יין",
        27854512, new Address("רחובות", "אופנהיימר", "525816206", 9), "NIKITA_JAIN@AMAT.COM"),
      new ContactPerson(2, false, new CodeValueModel(21, 'סוכן'), 'טוביה', 'בצקי',
        433974846, new Address('מחנה תל נוף', null!, "525452206"), null!)];
    this.onUpdateContactsCount.emit(this.contactPersons.length);
  }

  resetContacts() {
    this.contactPersons.splice(1, this.contactPersons.length);
    this.onUpdateContactsCount.emit(this.contactPersons.length);
  }

  deleteContacts() {
    this.contactPersons = [];
    this.onUpdateContactsCount.emit(0);
  }

  addInsuredToContacts(params: any) {
    let newContact: ContactPerson = this.createContact(params);
    this.contactPersons.push(newContact);
    this.onUpdateContactsCount.emit(this.contactPersons.length);
  };

  createContact(contact: any): ContactPerson {
    return new ContactPerson(
      this.contactPersons.length,
      this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      new CodeValueModel(1, 'מבוטח'), contact.firstName, contact.lastName, contact.identity,
      new Address(contact.address.cityName, contact.address.streetName, contact.address.cellPhone), contact.email);
  }

  isAmbulatoryProcess() {
    return this.process?.processType === "AMBULATORY_HEALTH_CLAIM" || this.process?.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
  }

  contactIsInsured(contactPerson: ContactPerson) {
    return contactPerson.type.code === this.contactPersonType.INSURED;
  }

  isInsuredInHealthClaim(contactPerson: ContactPerson) {
    return this.isAmbulatoryProcess() && this.contactIsInsured(contactPerson);
  }


  addContactPerson(e: Event) {
    e.preventDefault();
    this.contactPersons.push(new ContactPerson(
      this.contactPersons.length,
      this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      new CodeValueModel(5, 'שאר'), 'ישראל', 'ישראלי',
      278545412, new Address('רחובות', 'אופנהיימר', "525816206", 9), "NIKITA_JAIN@AMAT.COM"));
    this.onUpdateContactsCount.emit(this.contactPersons.length);
  }
}
