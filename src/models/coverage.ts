export class Coverage {
    constructor(_coverageNum: number, _claimParticipating: boolean) {
        this.claimParticipating = _claimParticipating;
        this.coverageNum = _coverageNum;
    }
    coverageNum: number;
    claimParticipating: boolean;
}