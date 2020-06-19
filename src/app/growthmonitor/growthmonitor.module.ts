import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MaterialModule } from "../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GrowthMonitorAppComponent } from "./growthmonitor-app.component";
// import { GrowthEntryService } from "./growthentries/growthentry.service";
import { ParticipantService } from "./participants/participant.service";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { NewParticipantDialogComponent } from "./participants/new-participant-dialog/new-participant-dialog.component";
import { GrowthEntriesComponent } from "./growthEntries/growth-entries-component/growthEntries.component";
import { ParticipantMainComponent } from "./participants/participant-main-component/participant-main.component";
import { ParticipantListComponent } from "./participants/participant-list/participant-list.component";
// import { NewGrowthEntryDialogComponent } from "./growthEntries/new-entry-dialog/new-entry-dialog.component";

const routes: Routes = [
  {
    path: "",
    component: GrowthMonitorAppComponent,
    children: [
      { path: ":id", component: ParticipantListComponent },
      { path: "", component: ParticipantListComponent },
    ],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ParticipantService],
  declarations: [
    GrowthMonitorAppComponent,
    ToolbarComponent,
    ParticipantMainComponent,
    GrowthEntriesComponent,
    NewParticipantDialogComponent,
    ParticipantListComponent,
    // NewGrowthEntryDialogComponent,
  ],
  entryComponents: [
    NewParticipantDialogComponent,
    // NewGrowthEntryDialogComponent,
  ],
})
export class GrowthMonitorModule {}
