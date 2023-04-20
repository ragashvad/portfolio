import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const matComponents = [MatSlideToggleModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatProgressBarModule]


@NgModule({

    imports: [
        ...matComponents

    ],
    exports: [...matComponents]

})
export class MaterialModule { }