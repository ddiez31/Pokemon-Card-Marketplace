import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Directive({
  selector: '[appFixedFrom]'
})
export class SidenavDirective implements OnInit, OnDestroy {
  @Input() appFixedFrom = 960;
  private _subscription = new Subscription();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  @Input() canOpen = () => true;


  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private readonly breakpoint: BreakpointObserver,
    private sidenav: MatSidenav,
    private readonly router: Router
    ) {}

  ngOnInit(): void {
    this._subscription.add(
      this.breakpoint
        .observe(`(min-width: ${this.appFixedFrom}px)`)
        .pipe(
          map(({ matches }) => matches)
        ).subscribe(permanent => {
        this.sidenav.mode = permanent ? 'side' : 'over';
        this.sidenav.opened = permanent;
      })
    );

    this._subscription.add(
      this.router.events
        .pipe(
          filter(() => this.sidenav.mode === 'over'),
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => this.sidenav.close())
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
