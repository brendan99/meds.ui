import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { Participant } from "../participant";
import { FormControl, Validators } from "@angular/forms";
import { ParticipantService } from "../participant.service";

@Component({
  selector: "app-new-participant-dialog",
  templateUrl: "./new-participant-dialog.component.html",
  styleUrls: ["./new-participant-dialog.component.scss"],
})
export class NewParticipantDialogComponent implements OnInit {
  avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];

  participant: Participant;
  constructor(
    private dialogRef: MatDialogRef<NewParticipantDialogComponent>,
    private ParticipantSvc: ParticipantService
  ) {}

  name = new FormControl("", [Validators.required]);

  getErrorMessage() {
    return this.name.hasError("required") ? "You must enter a name" : "";
  }

  ngOnInit() {
    this.participant = new Participant();
  }

  save() {
    this.ParticipantSvc.addParticipant(this.participant).then((participant) => {
      this.dialogRef.close(participant);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
