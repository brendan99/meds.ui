import { Component, OnInit } from "@angular/core";
import { ParticipantService } from "../participant.service";
import { IParticipant } from "../../models/participant.model";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: "participant-list",
  templateUrl: "./participant-list.component.html",
  styleUrls: ["./participant-list.component.scss"],
})
export class ParticipantListComponent implements OnInit {
  participants: IParticipant[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.participants = this.route.snapshot.data["participants"];
  }
}
