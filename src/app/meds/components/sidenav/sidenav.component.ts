import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { IUser } from '../../models/meds';
import { UsersService } from '../../services/users.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  users: Observable<IUser[]>;
  isDarkTheme: boolean = false;

  constructor(
    zone: NgZone,
    private userService: UsersService,
    private router: Router
  ) {
    this.mediaMatcher.addListener((mql) =>
      zone.run(() => (this.mediaMatcher = mql))
    );
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.userService.getUsers();
    this.userService.users$.subscribe((users) => {
      this.users = users;
    });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) this.sidenav.close();
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
