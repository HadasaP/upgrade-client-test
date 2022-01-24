import { Injectable } from '@angular/core';
import { OperativeClaim } from 'src/models/operativeClaim';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  checkIfParticipatingClaim(claim: OperativeClaim) {
    return claim.coverages.find(x => x.claimParticipating);
  }
}
