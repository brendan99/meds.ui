import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ParticipantService } from "./participant.service";

@Injectable()
export class ParticipantResolver implements Resolve<any> {
  constructor(private service: ParticipantService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.params["id"];

    return this.service.getParticipant(id);
  }
}
