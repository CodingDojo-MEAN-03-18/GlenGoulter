import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Power} from '../power';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent {
  // @Input() myTasks: Power[];
  // @Input() powers: Power[];
  @Input() myNumber: number;

  constructor() { }
  

  dataFromPower(eventData){
    console.log(eventData);
  }


  // ngOnInit() {
  // }

}
