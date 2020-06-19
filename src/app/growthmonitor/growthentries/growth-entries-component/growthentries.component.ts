import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { GrowthEntry } from "../growthentry";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
  MatTableDataSource,
  MatPaginator,
  MatSort,
} from "@angular/material";
import { NewGrowthEntryDialogComponent } from "../new-entry-dialog/new-entry-dialog.component";

@Component({
  selector: "app-growth-entries",
  templateUrl: "./growthentries.component.html",
  styleUrls: ["./growthentries.component.scss"],
})
export class GrowthEntriesComponent implements OnInit {
  @Input() growthEntries: GrowthEntry[];

  displayedColumns = ["height", "weight", "date"];
  dataSource: MatTableDataSource<GrowthEntry>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<GrowthEntry>(this.growthEntries);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openAddGrowthEntryDialog(): void {
    const dialogRef = this.dialog.open(NewGrowthEntryDialogComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);

      if (result) {
        this.openSnackBar("Entry added", "Navigate")
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
