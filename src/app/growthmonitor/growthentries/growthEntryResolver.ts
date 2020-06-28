import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ParticipantService } from "../participants/participant.service";

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private service: ParticipantService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getParticipant(route.params["id"]);
  }
}
