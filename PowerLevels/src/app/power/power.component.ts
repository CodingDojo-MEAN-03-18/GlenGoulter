import { Component, OnInit,EventEmitter,Output  } from '@angular/core';
import {Power} from './power'

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  // 1 Create an Event in the TaskComponent
  @Output() aTaskEventEmitter = new EventEmitter();

  // power = new Power();
  myArray : Array<Power> = [];
  myNumber : number;

  onChange(){
    // console.log(this.power);
    // this.power = new Power();
    // this.myArray.push(this.power);
    console.log(this.myNumber);
  }
  
  constructor() { }
}

