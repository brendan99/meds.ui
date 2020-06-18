import { Component, OnInit } from "@angular/core";
import { Participant } from "../participants/participant";
import { ActivatedRoute } from "@angular/router";
import { ParticipantService } from "../participants/participant.service";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
})
export class MainContentComponent implements OnInit {
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
          console.log(this.participant.id);
        }, 500);
      });
    });
  }
}
