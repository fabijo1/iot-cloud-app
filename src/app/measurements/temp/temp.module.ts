import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempComponent } from './temp.component';
import { TempChartComponent } from './temp-chart/temp-chart.component';
import { TempInfoComponent } from './temp-info/temp-info.component';
import { TempNowComponent } from './temp-now/temp-now.component';



@NgModule({
  declarations: [TempComponent, TempChartComponent, TempInfoComponent, TempNowComponent],
  imports: [
    CommonModule
  ]
})
export class TempModule { }

