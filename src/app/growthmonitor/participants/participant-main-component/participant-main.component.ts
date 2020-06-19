import { Component, OnInit } from "@angular/core";
import { Participant } from "../participant";
import { ActivatedRoute } from "@angular/router";
import { ParticipantService } from "../participant.service";

@Component({
  selector: "app-participant-main",
  templateUrl: "./participant-main.component.html",
  styleUrls: ["./participant-main.component.scss"],
})
export class ParticipantMainComponent implements OnInit {
  participant: Participant;
  constructor(
    private route: ActivatedRoute,
    private ParticipantSvc: ParticipantService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = +params["id"];
      if (!id) {
        id = 1;
      }
      this.participant = null;

      this.ParticipantSvc.participants.subscribe((participants) => {
        if (participants.length === 0) {
          return;
        }

        setTimeout(() => {
          this.participant = this.ParticipantSvc.participantById(id);
        }, 500);
      });
    });
  }
}
