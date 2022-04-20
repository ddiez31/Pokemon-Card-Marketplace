import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavDirective } from './sidenav.directive';


@NgModule({
  declarations: [
    SidenavDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [SidenavDirective]
})
export class SidenavModule { }
