import { Component, OnInit } from "@angular/core";
import { Participant } from "../../models/participant";
import { ActivatedRoute } from "@angular/router";
import { ParticipantService } from "../../services/participant.service";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
})
export class MainContentComponent implements OnInit {
  participant: Participant;
  constructor(
    private route: ActivatedRoute,
    private service: ParticipantService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params["id"];
      if (!id) {
        id = 1;
        this.participant = null;
      }
      this.service.participants.subscribe((pars) => {
        if (pars.length === 0) {
          return;
        }

        setTimeout(() => {
          this.participant = this.service.participantById(id);
        }, 500);
      });
    });
  }
}
