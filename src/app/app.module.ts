import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'meds',
    loadChildren: () =>
      import('src/app/meds/meds-feature.module').then(
        (m) => m.MedsFeatureModule
      ),
  },
  {
    path: 'growth',
    loadChildren: './growth/growth-app.module#GrowthFeatureModule',
  },
  { path: '**', redirectTo: 'meds' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
