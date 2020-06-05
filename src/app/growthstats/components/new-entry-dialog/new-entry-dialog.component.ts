import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { Participant } from "../../models/participant";
import { FormControl, Validators } from "@angular/forms";
import { ParticipantService } from "../../services/participant.service";

@Component({
  selector: "app-new-entry-dialog",
  templateUrl: "./new-entry-dialog.component.html",
  styleUrls: ["./new-entry-dialog.component.scss"],
})
export class NewEntryDialogComponent implements OnInit {
  // avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];

  participant: Participant;
  constructor(
    private dialogRef: MatDialogRef<NewEntryDialogComponent>,
    private participantService: ParticipantService
  ) {}

  name = new FormControl("", [Validators.required]);

  getNameErrorMessage() {
    return this.name.hasError("required") ? "You must enter a name" : "";
  }
  getGenderErrorMessage() {
    return this.name.hasError("required") ? "You must select a gender" : "";
  }
  getBirthDateErrorMessage() {
    return this.name.hasError("required")
      ? "You must enter a date of birth"
      : "";
  }

  ngOnInit() {
    this.participant = new Participant();
  }

  save() {
    this.participantService.addParticipant(this.participant).then((par) => {
      this.dialogRef.close(par);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
