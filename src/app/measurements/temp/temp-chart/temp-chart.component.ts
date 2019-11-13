import { Component, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import Plotly from 'plotly.js/dist/plotly.js';
import {formatDate} from '../../../../shared/functions';

@Component({
  selector: 'app-temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css']
})
export class TempChartComponent implements OnChanges {

  @ViewChild('chart', {static: false}) chart: ElementRef;
  @Input() measurements;

  ngOnChanges(changes: SimpleChanges): void {
    const measurements: SimpleChange = changes.measurements;
    if (measurements.previousValue !== measurements.currentValue) {
      this.basicChart(measurements.currentValue);
    }
  }
  basicChart(items) {
  const now = new Date();
  const yesterday = now.setDate(now.getDate() - 1);
  const element = this.chart.nativeElement;
  const data = [{
    x: [],
    y: []
    }];
  items.forEach ( item => {
  const time = new Date (( item .timestamp + 2 * 60) * 1000) ;
  if (time > new Date (yesterday)) {
  data[0].x.push(formatDate(item.timestamp));
  data[0].y.push(item.temperature);
  }
  });
  const style = {
  margin : {t: 0}
  };
  Plotly . react ( element , data , style );


  }

}
