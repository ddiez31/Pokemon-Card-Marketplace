import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { PokemonCardService } from './services/pokemon-card.service';
import { FilterComponent } from './components/filter/filter.component';
import { SidenavModule } from './directives/sidenav/sidenav.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    SidenavModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatSidenavModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  exports: [HeaderComponent, CardComponent, FilterComponent],
  providers: [PokemonCardService]
})
export class SharedModule { }
