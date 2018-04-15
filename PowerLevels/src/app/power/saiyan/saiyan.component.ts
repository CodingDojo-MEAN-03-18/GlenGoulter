import { Component, OnInit, OnChanges, Input, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent  {
  @Input() myNumber: number;
  constructor() { }


  ngOnChanges(changes: SimpleChanges){
    if(this.myNumber){
      this.myNumber = this.myNumber * 10;
    }
  }

}
