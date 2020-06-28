import { Component, OnInit } from "@angular/core";
import { IParticipant } from "../../models/participant.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  // selector: "app-participant-main",
  templateUrl: "./participant-detail.component.html",
  styleUrls: ["./participant-detail.component.scss"],
})
export class ParticipantDetailComponent implements OnInit {
  participant: IParticipant;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.data);
    this.participant = this.route.snapshot.data["participant"];
  }
}
