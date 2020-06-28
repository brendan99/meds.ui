import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ParticipantService } from "./participant.service";

@Injectable()
export class ParticipantListResolver implements Resolve<any> {
  constructor(private participantService: ParticipantService) {}

  resolve() {
    return this.participantService.getParticipants();
  }
}
