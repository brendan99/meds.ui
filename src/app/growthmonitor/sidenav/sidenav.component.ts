import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { ParticipantService } from "../participants/participant.service";
import { Observable } from "rxjs/Observable";
import { Participant } from "../participants/participant";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  participants: Observable<Participant[]>;
  isDarkTheme = false;
  dir = "ltr";

  constructor(
    zone: NgZone,
    private ParticipantSvc: ParticipantService,
    private router: Router
  ) {
    this.mediaMatcher.addListener((mql) => zone.run(() => this.mediaMatcher));
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir === "ltr" ? "rtl" : "ltr";
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }

  ngOnInit() {
    this.participants = this.ParticipantSvc.participants;
    this.ParticipantSvc.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
