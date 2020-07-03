import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { IGrowthEntry } from "../../models/growthentry.model";
import { FormControl, Validators } from "@angular/forms";
// import { GrowthEntryService } from "../growthentry.service";

@Component({
  selector: "app-new-entry",
  templateUrl: "./new-entry.component.html",
  styleUrls: ["./new-entry.component.scss"],
})
export class NewGrowthEntryDialogComponent implements OnInit {
  growthEntry: IGrowthEntry;
  constructor(
    private dialogRef: MatDialogRef<NewGrowthEntryDialogComponent> //  private GrowthEntrySvc: GrowthEntryService
  ) {}

  height = new FormControl("", [Validators.required]);

  getErrorMessage() {
    return this.height.hasError("required") ? "You must enter a height" : "";
  }

  ngOnInit() {
    // this.growthEntry = new IGrowthEntry();
  }

  save() {
    // this.GrowthEntrySvc.addGrowthEntry(this.growthEntry).then((growthEntry) => {
    //   this.dialogRef.close(growthEntry);
    // });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
