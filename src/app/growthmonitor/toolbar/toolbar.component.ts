import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  MatDialog,
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from "@angular/material";
import { Router } from "@angular/router";
import { NewParticipantComponent } from "../participants/new-participant-dialog/new-participantcomponent";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  // @Output() toggleDir = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  openAddParticipantDialog(): void {
    const dialogRef = this.dialog.open(NewParticipantComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);

      if (result) {
        this.openSnackBar("Contact added", "Navigate")
          .onAction()
          .subscribe(() => {
            this.router.navigate(["/growthmonitor", result.id]);
          });
      }
    });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
