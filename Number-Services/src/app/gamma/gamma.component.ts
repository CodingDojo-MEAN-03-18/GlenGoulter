import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  myDiffernce : number;
  reassignDiff:number;
  constructor(private _numberService : NumberService) { }

  //initialize your local var on initialization
  ngOnInit() {
    //this.myDiffernce = this._numberService.differnce;
    this.myDiffernce = this._numberService.retrieveDifference();
  }

  getDifference(){
    this.reassignDiff=this._numberService.getArrayDifference();
  }

}
