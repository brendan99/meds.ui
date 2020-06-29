import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MaterialModule } from "../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GrowthMonitorAppComponent } from "./growthmonitor-app.component";
import { ParticipantService } from "./participants/participant.service";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { NewParticipantComponent } from "./participants/new-participant/new-participantcomponent";
import { GrowthEntriesComponent } from "./entries/entries-list/entries-list.component";
import { ParticipantDetailComponent } from "./participants/participant-detail/participant-detail.component";
import { ParticipantListComponent } from "./participants/participants-list/participant-list.component";
import { ParticipantListResolver } from "./participants/participants-list-resolver.service";
import { ParticipantResolver } from "./participants/participant-resolver.service";

const routes: Routes = [
  // {
  //   path: "participants/new",
  //   component: NewParticipantDialogComponent,
  //   canDeactivate: ["canDeactivateCreateParticipant"],
  // },
  {
    path: "participants",
    component: GrowthMonitorAppComponent,
    resolve: { participants: ParticipantListResolver },
  },
  {
    path: "participants/:id",
    component: ParticipantDetailComponent,
    resolve: { participant: ParticipantResolver },
  },
  // { path: '404', component: Error404Component },
  { path: "", redirectTo: "/growthmonitor/participants", pathMatch: "full" },
  // { path: "user", loadChildren: "./user/user.module#UserModule" },
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
  providers: [ParticipantService, ParticipantListResolver, ParticipantResolver],
  declarations: [
    GrowthMonitorAppComponent,
    ParticipantDetailComponent,
    GrowthEntriesComponent,
    NewParticipantComponent,
    ParticipantListComponent,
    ToolbarComponent,
  ],
  entryComponents: [NewParticipantComponent],
})
export class GrowthMonitorModule {}
