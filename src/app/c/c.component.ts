import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CodeValueModel } from 'src/models/codeValueModel';
import { OperativeClaim } from 'src/models/operativeClaim';
import { ProcessModel } from 'src/models/procesModel';
import { TestService } from '../test.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html'
})
export class CComponent implements OnInit {
  @Output() onRefresh: EventEmitter<any> = new EventEmitter();
  @Input() process: ProcessModel | undefined;
  @Output() processChange: EventEmitter<ProcessModel> = new EventEmitter();
  constructor(private testService: TestService) { }
  pensionFollowUpType: Array<CodeValueModel> = [];
  canceledClaimStatus: number = 2;
  ngOnInit(): void {
    this.pensionFollowUpType = [
      new CodeValueModel(1, "במעקב נכות שנתי"),
      new CodeValueModel(2, "במעקב נכות רפואי"),
      new CodeValueModel(3, "במעקב נכות שנתי ורפואי")
    ];
  }

  hasIrragularMark() {
    return this.process && this.process.superClaim && this.process.superClaim.irregularSuperClaimFlag === true;
  }

  claimRemarks() {
    let text: string = "";
    if (this.process && this.process.superClaim && this.process.superClaim.inquiryPorcessFlag) {
      text += "בירור";
      if (this.process.superClaim.pensionFollowUpForInsuredType) {
        text += ", ";
      }
    }
    return text;
  }

  getClaims() {
    if (this.process) {
      if (!this.process.superClaim || !this.process.superClaim.operativeClaims) { return ''; }
      let ParticipatingClaims = this.getParticipatingClaims(this.process.superClaim.operativeClaims);
      return ParticipatingClaims ? ParticipatingClaims.map(claim => {
        return claim.company + "-" + claim.operativeClaimNum;
      }).join(",") : "אין תביעות משתתפות";
    }
    return null;
  }

  executeRefresh() {
    this.onRefresh.emit();
  }

  getParticipatingClaims(operativeClaims: Array<OperativeClaim>) {
    return operativeClaims.filter(claim =>
      claim.claimStatus.code !== this.canceledClaimStatus && this.testService.checkIfParticipatingClaim(claim));
  }
}
