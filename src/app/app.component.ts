import { Component, OnInit, ViewChild } from '@angular/core';
import { Address } from '../models/address';
import { CodeValueModel } from '../models/codeValueModel';
import { Coverage } from '../models/coverage';
import { Insured } from '../models/insured';
import { OperativeClaim } from '../models/operativeClaim';
import { ProcessModel } from '../models/procesModel';
import { SuperClaim } from '../models/superClaim';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  process!: ProcessModel;
  @ViewChild("a") a!: AComponent;
  @ViewChild("b") b!: BComponent;
  @ViewChild("c") c!: CComponent;
  ngOnInit(): void {
    let _insure: Insured = new Insured(true, ('פקיד'), 27854122145,
      "מריה", "ג'יין", 35, "כללי - מקפת", 0, "NIKITA_JAIN@AMAT.COM", new Address("רעננה", "אחוזה", '544485236'));
    let _superClaim: SuperClaim = new SuperClaim(true, false, 0, new CodeValueModel(1, 'פתוחה'), false,
      [new OperativeClaim(123, 2, new CodeValueModel(2, 'פתוחה'), [new Coverage(1, false), new Coverage(2, false)]),
      new OperativeClaim(24531, 1, new CodeValueModel(1, 'מבוטלת'), [new Coverage(1, true), new Coverage(2, false)])]);
    this.process = new ProcessModel("AMBULATORY_HEALTH_CLAIM", 1, _superClaim, _insure);
  }
  refreshProcess(): void {
    this.process.superClaim.inquiryPorcessFlag = false;
    this.process.superClaim.irregularSuperClaimFlag = true;
  }
  addInsuredToContacts(params: any) {
    this.a.addInsuredToContacts(params);
  }
  updateContactsCount(count:any) {
    this.b.bb.updateContactsCount(count);
  }
  deleteContacts() {
    this.a.deleteContacts();
  }
  resetContacts() {
    this.a.resetContacts();

  }
}