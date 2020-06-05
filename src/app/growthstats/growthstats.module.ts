import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MaterialModule } from "../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GrowthStatsAppComponent } from "./growthstats-app.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ParticipantService } from "./services/participant.service";
import { HttpClientModule } from "@angular/common/http";
import { NotesComponent } from "./components/notes/notes.component";
import { NewEntryDialogComponent } from "./components/new-entry-dialog/new-entry-dialog.component";

const routes: Routes = [
  {
    path: "",
    component: GrowthStatsAppComponent,
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
    GrowthStatsAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewEntryDialogComponent,
  ],
  entryComponents: [NewEntryDialogComponent],
})
export class ContactmanagerModule {}
