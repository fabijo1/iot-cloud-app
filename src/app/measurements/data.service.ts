import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase) { }
  getData(dataset: string) {
    return this.db.list(dataset);
  }
}
