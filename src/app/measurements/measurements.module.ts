import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasurementsRoutingModule } from './measurements-routing.module';
import {TempModule} from './temp/temp.module';
import { DataService } from './data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TempModule,
    MeasurementsRoutingModule
  ],
  providers: [DataService]
})
export class MeasurementsModule { }
