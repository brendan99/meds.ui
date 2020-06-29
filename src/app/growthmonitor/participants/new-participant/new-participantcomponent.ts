import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { IParticipant } from "../../models/participant.model";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ParticipantService } from "../participant.service";
import { restrictedWords } from "../../../shared/restricted-words.validator";

@Component({
  selector: "app-new-participant",
  templateUrl: "./new-participant.component.html",
  styleUrls: ["./new-participant.component.scss"],
})
export class NewParticipantComponent implements OnInit {
  @Output() saveNewParticipant = new EventEmitter();
  @Output() cancelAddParticipant = new EventEmitter();

  newParticipantForm: FormGroup;
  name: FormControl;
  dateOfBirth: FormControl;
  notes: FormControl;

  participant: IParticipant;

  constructor(
    private dialogRef: MatDialogRef<NewParticipantComponent>,
    private ParticipantSvc: ParticipantService
  ) {}

  OnInit(): void {
    this.name = new FormControl("", Validators.required);
    this.dateOfBirth = new FormControl("", Validators.required);
    this.notes = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(["fuck", "cunt"]),
    ]);

    this.newParticipantForm = new FormGroup({
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      notes: this.notes,
    });
  }

  getErrorMessage() {
    return this.name.hasError("required") ? "You must enter a name" : "";
  }

  ngOnInit() {}

  save(formValues) {
    const participant: IParticipant = {
      id: undefined,
      name: formValues.name,
      dateOfBirth: formValues.dateOfBirth,
      notes: formValues.notes,
      growthEntries: [],
    };
    this.saveNewParticipant.emit(participant);
    this.ParticipantSvc.saveParticipant(this.participant).subscribe(
      (participant) => {
        this.dialogRef.close(participant);
      }
    );
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
