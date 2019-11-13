import { Component, Input } from '@angular/core';
import {formatDate, precisionRound} from '../../../../shared/functions';

@Component({
  selector: 'app-temp-now',
  templateUrl: './temp-now.component.html',
  styleUrls: ['./temp-now.component.css']
})
export class TempNowComponent {
  @Input() item;

  // tslint:disable-next-line:variable-name
  precisionRound(number, precision) {
    return precisionRound (number, precision);
  }

  formatDate(date) {
  console.log('Date');
  return formatDate(date);
  }


}
