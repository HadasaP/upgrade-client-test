import { Coverage } from "./coverage";
import { CodeValueModel } from "./codeValueModel";

export class OperativeClaim {
    constructor(_operativeClaimNum: number, _company: number, _claimStatus: CodeValueModel, _coverages: Array<Coverage>) {
        this.operativeClaimNum = _operativeClaimNum;
        this.company = _company;
        this.claimStatus = _claimStatus;
        this.coverages = _coverages;
    }
    operativeClaimNum: number;
    company: number;
    claimStatus: CodeValueModel;
    coverages: Array<Coverage>;

}