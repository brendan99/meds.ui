import { Component, OnInit } from "@angular/core";
import { ParticipantService } from "../participant.service";
import { Participant } from "../participant";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-participant-list",
  templateUrl: "./participant-list.component.html",
  styleUrls: ["./participant-list.component.scss"],
})
export class ParticipantListComponent implements OnInit {
  participants: Observable<Participant[]>;

  constructor(private participantSvc: ParticipantService) {}

  ngOnInit() {
    this.participants = this.participantSvc.participants;
    this.participantSvc.loadAll();
  }
}
