import { NgModule } from '@angular/core';

import { MedsFeatureComponent } from './meds-feature.component';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NewMedEntryComponent } from './components/new-med-entry/new-med-entry.component';

const routes: Routes = [
  {
    path: '',
    component: MedsFeatureComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [
    MedsFeatureComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    NewMedEntryComponent,
  ],
  providers: [],
})
export class MedsFeatureModule {}
