import { Component } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  measurements;

  constructor(private dataService: DataService) { this.dataService.getData('weather-station')
    .valueChanges().subscribe(data => {
      this.measurements = data;
    });


  }
}
