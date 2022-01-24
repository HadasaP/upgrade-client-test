import { Insured } from "./insured";
import { SuperClaim } from "./superClaim";

export class ProcessModel {
    constructor(_processType: string, _processStatus: number, _superClaim: SuperClaim, _insured: Insured) {
        this.processType = _processType;
        this.processStatus = _processStatus;
        this.superClaim = _superClaim;
        this.insured = _insured;
    }
    processType: string;
    processStatus: number;
    superClaim: SuperClaim;
    insured: Insured;
}