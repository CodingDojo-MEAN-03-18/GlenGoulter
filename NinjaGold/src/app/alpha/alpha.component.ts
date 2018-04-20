import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service'

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  myAlphaArray : Array<number> =[];//my local alphaArray
  constructor(private _numberService : NumberService) { }

  ngOnInit() {
    this.myAlphaArray = this._numberService.retrieveAlphaNumbers();
  }

  pushNumber(){
    this._numberService.addNumberToAlpha(Math.floor(Math.random()*10));
  }

}
