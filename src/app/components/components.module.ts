import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

/* Modules */
import { FormsModule } from '@angular/forms';

/*Components */
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports:[ IncrementadorComponent, DonaComponent ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
