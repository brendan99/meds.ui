import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MaterialModule } from "../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GrowthMonitorAppComponent } from "./growthmonitor-app.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ParticipantService } from "./participants/participant.service";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { NewParticipantDialogComponent } from "./participants/new-participant-dialog/new-participant-dialog.component";
import { NotesComponent } from "./notes/notes.component";

const routes: Routes = [
  {
    path: "",
    component: GrowthMonitorAppComponent,
    children: [
      { path: ":id", component: MainContentComponent },
      { path: "", component: MainContentComponent },
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
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewParticipantDialogComponent,
  ],
  entryComponents: [NewParticipantDialogComponent],
})
export class GrowthMonitorModule {}
