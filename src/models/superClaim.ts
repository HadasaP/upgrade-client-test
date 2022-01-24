import { OperativeClaim } from "./operativeClaim";
import { CodeValueModel } from "./codeValueModel";

export class SuperClaim {
    constructor(_inquiryPorcessFlag: boolean, _irregularSuperClaimFlag: boolean, _pensionFollowUpForInsuredType: number,
        _superClaimStatus: CodeValueModel, _deathAfterDisabilityFlag: boolean, _operativeClaims: Array<OperativeClaim>) {
        this.inquiryPorcessFlag = _inquiryPorcessFlag;
        this.irregularSuperClaimFlag = _irregularSuperClaimFlag;
        this.pensionFollowUpForInsuredType = _pensionFollowUpForInsuredType;
        this.superClaimStatus = _superClaimStatus;
        this.deathAfterDisabilityFlag = _deathAfterDisabilityFlag;
        this.operativeClaims = _operativeClaims;
    }
    inquiryPorcessFlag: boolean;
    irregularSuperClaimFlag: boolean;
    pensionFollowUpForInsuredType: number;
    superClaimStatus: CodeValueModel;
    deathAfterDisabilityFlag: boolean;
    operativeClaims: Array<OperativeClaim>;
}
